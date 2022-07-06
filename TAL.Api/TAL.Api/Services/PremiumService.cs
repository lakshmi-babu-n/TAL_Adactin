using TAL.Api.Interfaces;
using TAL.Api.Models;
using TAL.Api.Utilities;

namespace TAL.Api.Services
{
    public class PremiumService: IPremiumService
    {
        private IOccupationService _occupationService;
        public PremiumService(IOccupationService occupationService)
        {
            _occupationService= occupationService;
        }

        public double CalculateMonthlyPremium(PremiumData premiumData)
        {
            double monthlyPremium = 0;
            var occupationData = _occupationService.GetOccupationDetails()
                                            .Where(o => o.Occupation.Equals(premiumData.Occupation, StringComparison.OrdinalIgnoreCase)).FirstOrDefault();
            if (occupationData != null)
            {
                var ratingFactor = OccupationUtil.GetRatingFactor(occupationData.Rating);
                if (ratingFactor != 0)
                {
                    monthlyPremium = (premiumData.DeathCoverageAmount * ratingFactor * premiumData.Age) / 1000 * 12;
                }
            }
            return Math.Round(monthlyPremium,2);
        }

    }
}
