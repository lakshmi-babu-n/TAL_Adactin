using Microsoft.AspNetCore.Mvc;
using TAL.Api.Interfaces;

namespace TAL.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OccupationController : ControllerBase
    {
        private IOccupationService _occupationService;
        public OccupationController(IOccupationService occupationService)
        {
            _occupationService = occupationService;
        }

        [HttpGet]
        public string[] GetOccupationList()
        {
            return _occupationService.GetOccupationList();
        }
    }
}
