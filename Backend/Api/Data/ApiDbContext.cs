using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {
        }

        public DbSet<EnvironmentalData> EnvironmentalData { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<EnvironmentalData>().ToTable("EnvironmentalData");
        }
    }
}
