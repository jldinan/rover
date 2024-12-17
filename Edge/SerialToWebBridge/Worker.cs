using System.IO.Ports;
using System.Text;
using System.Text.Json;

namespace SerialToWebBridge;

public class Worker : BackgroundService
{
    private readonly ILogger<Worker> logger;
    private SerialPort serialPort;
    private string portName = "/dev/ttyACM0";

    public class EnvironmentalData
    {
        public required string Id { get; set; }
        public DateTime Timestamp { get; set; }
        public required double Temperature { get; set; }
        public required double Humidity { get; set; }
    }

    public Worker(ILogger<Worker> logger)
    {
        this.logger = logger;
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

    public override void Dispose()
    {
        serialPort?.Dispose();
        base.Dispose();
    }
}
