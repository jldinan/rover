using Api.Models;

namespace Api.Interfaces
{
    public interface IEnvironmentalDataRepository
    {
        Task<List<EnvironmentalData>> GetAll();
        Task<EnvironmentalData?> GetById(int id);
        Task<EnvironmentalData?> GetLatest();
        Task<EnvironmentalData> Create(EnvironmentalData user);
        Task<EnvironmentalData?> Update(EnvironmentalData user);
        Task<bool> DeleteById(int id);
    }
}
