using Microsoft.AspNetCore.Identity;
namespace AlohaApi.Models
{
    public class AppUser

    {
        public int Id { get; set; }
        public string Phonenumber { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Pass { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}