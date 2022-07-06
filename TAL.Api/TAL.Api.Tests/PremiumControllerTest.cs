using Moq;
using Xunit;
using TAL.Api.Interfaces;
using TAL.Api.Controllers;
using TAL.Api.Models;

namespace TAL.Api.Tests
{
    public class PremiumControllerTest
    {
        [Fact(DisplayName = "Calculate monthly premium test")]
        public void CalculatePremiumTest()
        {
            var premiumData = new PremiumData()
            {
                Age = 30,
                DeathCoverageAmount = 100,
                Occupation = "Doctor"
            };
            var mockPremiumService = new Mock<IPremiumService>();
            mockPremiumService.Setup(x => x.CalculateMonthlyPremium(premiumData))
               .Returns(36);
            var premiumController = new PremiumController(mockPremiumService.Object);
            var data = premiumController.CalculateMonthlyPremium(premiumData);
            Assert.Equal(36, data);
        }
    }
}
