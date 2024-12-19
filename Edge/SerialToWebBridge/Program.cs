using SerialToWebBridge;
/* To build for Pi: dotnet publish -r linux-arm -c Release -o ./publish
 * uname -m
 * armv7l: This indicates a 32-bit operating system. Use linux-arm.
 * aarch64: This indicates a 64-bit operating system. Use linux-arm64.
 */

var builder = Host.CreateApplicationBuilder(args);
builder.Services.AddHostedService<Worker>();
builder.Services.AddHttpClient();
builder.Configuration.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

var host = builder.Build();
host.Run();
