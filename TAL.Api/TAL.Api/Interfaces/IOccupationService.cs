using TAL.Api.Models;

namespace TAL.Api.Interfaces
{
    public interface IOccupationService
    {
        string[] GetOccupationList();
        List<OccupationDetails> GetOccupationDetails();

    }
}
