using AlohaApi.Models;

namespace AlohaApi.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}