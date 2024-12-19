using System.IO.Ports;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.Json;

namespace SerialToWebBridge;

public class Worker : BackgroundService
{
    private readonly ILogger<Worker> logger;
    private SerialPort serialPort;
    private readonly HttpClient httpClient;
    private string endpointUrl = "";
    private string portName = "";

    public class EnvironmentalData
    {
        public DateTime Timestamp { get; set; }
        public required double Temperature { get; set; }
        public required double Humidity { get; set; }
    }

    public Worker(ILogger<Worker> logger, IHttpClientFactory httpClientFactory, IConfiguration configuration)
    {
        this.logger = logger;
        this.httpClient = httpClientFactory.CreateClient();

        var linuxPort = configuration["SerialPortSettings:LinuxPort"];
        var windowsPort = configuration["SerialPortSettings:WindowsPort"];
        var endpointUrl = configuration["WebApiSettings:EndpointUrl"];
        this.endpointUrl = endpointUrl ?? string.Empty;

        if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
        {
            portName = linuxPort ?? "/dev/ttyACM0";
        }
        else if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
        {
            portName = windowsPort ?? "COM3";
        }
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        serialPort = new SerialPort
        {
            PortName = portName,
            BaudRate = 9600,
            Parity = Parity.None,
            DataBits = 8,
            StopBits = StopBits.One,
            Handshake = Handshake.None,
            Encoding = Encoding.UTF8
        };

        var jsonSerializerOptions = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };

        try
        {
            serialPort.Open();
            logger.LogInformation("Serial port opened.");

            // Clear any existing data in the input buffer
            serialPort.DiscardInBuffer();

            while (!stoppingToken.IsCancellationRequested)
            {
                if (serialPort.BytesToRead > 0)
                {
                    string data = serialPort.ReadLine();

                    try
                    {
                        var serialData = JsonSerializer.Deserialize<EnvironmentalData>(data, jsonSerializerOptions);

                        if (serialData != null)
                        {
                            serialData.Timestamp = DateTime.Now;
                            string serializedData = JsonSerializer.Serialize(serialData, jsonSerializerOptions);
                            Console.WriteLine($"Deserialized Data: {serializedData}");
                            await PostDataAsync(serialData, stoppingToken);
                        }
                        else
                        {
                            Console.WriteLine("Deserialization returned null.");
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Deserialization failed: {ex.Message}");
                    }
                }

                await Task.Delay(100, stoppingToken);
            }
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in serial communication.");
        }
        finally
        {
            serialPort?.Close();
            logger.LogInformation("Serial port closed.");
        }
    }

    private async Task PostDataAsync(EnvironmentalData data, CancellationToken cancellationToken)
    {
        try
        {
            var jsonContent = new StringContent(JsonSerializer.Serialize(data), Encoding.UTF8, "application/json");
            var response = await httpClient.PostAsync(endpointUrl, jsonContent, cancellationToken);

            if (response.IsSuccessStatusCode)
            {
                logger.LogInformation("Data posted successfully.");
            }
            else
            {
                logger.LogWarning($"Failed to post data. Status code: {response.StatusCode}");
            }
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error posting data to the endpoint.");
        }
    }

    public override void Dispose()
    {
        serialPort?.Dispose();
        base.Dispose();
    }
}
