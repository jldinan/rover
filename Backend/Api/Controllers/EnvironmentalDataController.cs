using Api.Interfaces;
using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
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
        var users = await repository.GetAll();
        if (users is null)
        {
            return NoContent();
        }
        return Ok(users);
    }
}
