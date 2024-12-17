namespace Api.Models
{
    public class EnvironmentalData
    {
        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        public required double Temperature { get; set; }
        public required double Humidity { get; set; }
    }
}