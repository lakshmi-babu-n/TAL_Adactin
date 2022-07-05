using Newtonsoft.Json;
using TAL.Api.Models;

namespace TAL.Api.Utilities
{
    public static class OccupationUtil
    {
        public static double GetRatingFactor(Rating rating)
        {
            switch (rating)
            {
                case Rating.Professional:
                    return 1.0;
                case Rating.WhiteCollar:
                    return 1.25;
                case Rating.LightManual:
                    return 1.50;
                case Rating.HeavyManual:
                    return 1.75;
                default:
                    return 0;
            }
        }

        public static List<OccupationData> GetoccupationData()
        {
            return JsonConvert.DeserializeObject<List<OccupationData>>(File.ReadAllText("./OccupationtData.json"));
        }
    }
}
