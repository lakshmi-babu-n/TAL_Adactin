using TAL.Api.Models;

namespace TAL.Api.Interfaces
{
    public interface IPremiumService
    {
        double CalculateMonthlyPremium(PremiumData premiumData);
    }
}
