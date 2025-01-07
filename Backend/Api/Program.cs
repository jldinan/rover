using Microsoft.EntityFrameworkCore;
using Api.Interfaces;
using Api.Repositories;
using Api.Data;
using System.Net;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApiDbContext>(options =>  options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<IEnvironmentalDataRepository, EnvironmentalDataRepositoryEF>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddRouting(options => options.LowercaseUrls = true);

builder.WebHost.ConfigureKestrel(options =>
{
    var ipAddress = Environment.GetEnvironmentVariable("ROVER_KESTREL_IP") ?? "127.0.0.1";
    var port = int.TryParse(Environment.GetEnvironmentVariable("ROVER_KESTREL_PORT"), out var parsedPort) ? parsedPort : 5274;
    options.Listen(IPAddress.Parse(ipAddress), port);
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();