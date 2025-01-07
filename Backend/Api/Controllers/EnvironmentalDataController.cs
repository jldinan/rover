using Api.Interfaces;
using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/environmental-data")]
public class EnvironmentalDataController : ControllerBase
{
    private readonly ILogger<EnvironmentalDataController> logger;
    private readonly IEnvironmentalDataRepository repository;

    public EnvironmentalDataController(ILogger<EnvironmentalDataController> logger, IEnvironmentalDataRepository repository)
    {
        this.logger = logger;
        this.repository = repository;
    }

    [HttpGet(Name = "GetEnvironmentalData")]
    public async Task<ActionResult<IEnumerable<EnvironmentalData>>> Get()
    {
        var environmentalData = await repository.GetAll();
        if (environmentalData is null)
        {
            return NoContent();
        }
        return Ok(environmentalData);
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<EnvironmentalData>> GetById(int id)
    {
        var environmentalData = await repository.GetById(id);
        if (environmentalData is null)
        {
            return NotFound();
        }
        return Ok(environmentalData);
    }

    [HttpGet("latest", Name = "GetLatestEnvironmentalData")]
    public async Task<ActionResult<EnvironmentalData>> GetLatest()
    {
        var latestData = await repository.GetLatest();
        if (latestData is null)
        {
            return NoContent();
        }
        return Ok(latestData);
    }

    [HttpPost]
    public async Task<ActionResult<EnvironmentalData>> Create(EnvironmentalData environmentalData)
    {
        await repository.Create(environmentalData);
        return CreatedAtAction(nameof(GetById), new { id = environmentalData.Id }, environmentalData);
    }

    [HttpPut]
    public async Task<ActionResult<EnvironmentalData>> Update(EnvironmentalData environmentalData)
    {
        var updatedEnvironmentalData = await repository.Update(environmentalData);
        if (updatedEnvironmentalData is null)
        {
            return NotFound();
        }
        return Ok(updatedEnvironmentalData);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteById(int id)
    {
        bool environmentalDataDeleted = await repository.DeleteById(id);
        if (environmentalDataDeleted)
        {
            return NoContent();
        }
        else
        {
            return NotFound();
        }
    }
}
