using Api.Data;
using Api.Interfaces;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Repositories
{
    public class EnvironmentalDataRepositoryEF : IEnvironmentalDataRepository
    {
        private readonly ILogger logger;
        private readonly ApiDbContext context;

        public EnvironmentalDataRepositoryEF(ILogger<EnvironmentalDataRepositoryEF> logger, ApiDbContext context)
        {
            this.context = context;
            this.logger = logger;
        }

        public async Task<List<EnvironmentalData>> GetAll()
        {
            return await context.EnvironmentalData.ToListAsync();
        }

        public async Task<EnvironmentalData?> GetById(int id)
        {
            return await context.EnvironmentalData.FindAsync(id);
        }

        public async Task<EnvironmentalData?> GetLatest()
        {
            var latestTimestamp = await context.EnvironmentalData.MaxAsync(data => data.Timestamp);
            return await context.EnvironmentalData.FirstOrDefaultAsync(data => data.Timestamp == latestTimestamp);
        }

        public async Task<EnvironmentalData> Create(EnvironmentalData user)
        {
            context.EnvironmentalData.Add(user);
            await context.SaveChangesAsync();
            return user;
        }

        public async Task<EnvironmentalData?> Update(EnvironmentalData environmentalData)
        {
            var existingEnvironmentalData = await context.EnvironmentalData.FindAsync(environmentalData.Id);

            if (existingEnvironmentalData is not null)
            {
                existingEnvironmentalData.Temperature = environmentalData.Temperature;
                existingEnvironmentalData.Humidity = environmentalData.Humidity;
                existingEnvironmentalData.Timestamp = environmentalData.Timestamp;
            }

            await context.SaveChangesAsync();
            return environmentalData;
        }

        public async Task<bool> DeleteById(int id)
        {
            var user = await context.EnvironmentalData.FindAsync(id);
            if (user is not null)
            {
                context.EnvironmentalData.Remove(user);
                await context.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
