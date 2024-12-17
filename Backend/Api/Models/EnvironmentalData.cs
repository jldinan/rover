namespace Api.Models
{
    public class EnvironmentalData
    {
        public required string Id { get; set; }
        public DateTime Timestamp { get; set; }
        public required double Temperature { get; set; }
        public required double Humidity { get; set; }
    }
}