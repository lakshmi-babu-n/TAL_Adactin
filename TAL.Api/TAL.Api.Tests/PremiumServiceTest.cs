using TAL.Api.Models;
using TAL.Api.Services;
using Xunit;

namespace TAL.Api.Tests
{
    public class PremiumServiceTest
    {
        [Fact]
        public void CalculateMonthlyPremium()
        {
            var _occupationService = new OccupationService();
            var premiumData = new PremiumData()
            {
                Age = 30,
                DeathCoverageAmount = 100,
                Occupation = "Doctor"
            };
            var service = new PremiumService(_occupationService);
            var premiumAmount = service.CalculateMonthlyPremium(premiumData);
            Assert.Equal(36, premiumAmount);
        }
    }
}
