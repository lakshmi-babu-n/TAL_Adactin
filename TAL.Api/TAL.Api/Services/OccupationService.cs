using Newtonsoft.Json;
using TAL.Api.Interfaces;
using TAL.Api.Models;
using TAL.Api.Utilities;

namespace TAL.Api.Services
{
    public class OccupationService : IOccupationService
    {

        static readonly List<OccupationData> OccupationData = new List<OccupationData>();
        static OccupationService()
        {
            if (!OccupationData.Any())
                OccupationData = OccupationUtil.GetoccupationData();
        }

        public string[] GetOccupationList()
        {
            return OccupationData.Select(o => o.Occupation).ToArray();
        }
    }
}
