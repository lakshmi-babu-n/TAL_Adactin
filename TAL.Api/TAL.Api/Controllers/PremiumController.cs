using Microsoft.AspNetCore.Mvc;
using TAL.Api.Interfaces;
using TAL.Api.Models;

namespace TAL.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PremiumController : ControllerBase
    {
        private IPremiumService _premiumService;
        public PremiumController(IPremiumService premiumService)
        {
            _premiumService = premiumService;
        }

        /// <summary>
        /// Calculate monthly premium
        /// </summary>
        [HttpPost]
        [Route("monthlyPremium")]
        public double CalculateMonthlyPremium(PremiumData premiumData)
        {
            return _premiumService.CalculateMonthlyPremium(premiumData);
        }
    }
}
