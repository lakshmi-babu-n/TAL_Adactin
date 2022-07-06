using Moq;
using Xunit;
using TAL.Api.Interfaces;
using TAL.Api.Controllers;

namespace TAL.Api.Tests
{
    public class OccupationControllerTest
    {

        [Fact(DisplayName = "Get occupation list test")]
        public void GetOccupationListTest()
        {
            var mockOccupationService = new Mock<IOccupationService>();
            mockOccupationService.Setup(x => x.GetOccupationList())
               .Returns(new string[] { "Cleaner", "Doctor" });
            var occupationController = new OccupationController(mockOccupationService.Object);
            var data = occupationController.GetOccupationList();
            Assert.NotNull(data);
            Assert.Equal(2, data.Length);
            Assert.Equal("Cleaner", data[0]);
            Assert.Equal("Doctor", data[1]);
        }
    }
}