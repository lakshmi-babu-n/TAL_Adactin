using TAL.Api.Services;
using Xunit;

namespace TAL.Api.Tests
{
    public class OccupationServiceTest
    {
        [Fact(DisplayName = "Get all occupation list test")]
        public void GetOccupationList()
        {
            var service = new OccupationService();
            var data = service.GetOccupationList();
            Assert.NotNull(data);
            Assert.Equal(6, data.Length);
        }

        [Fact(DisplayName = "Get occupation details test")]
        public void GetOccupationDetails()
        {
            var service = new OccupationService();
            var data = service.GetOccupationDetails();
            Assert.NotNull(data);
            Assert.Equal(6, data.Count);
            var firstRow = data[0];
            Assert.Equal("Cleaner", data[0].Occupation);
            Assert.Equal(Models.Rating.LightManual, data[0].Rating);
        }
    }
}
