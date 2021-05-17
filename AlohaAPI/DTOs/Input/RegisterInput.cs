using System.ComponentModel.DataAnnotations;

namespace AlohaApi.DTOs.Input
{
    public class RegisterInput
    {
        [Required]
        public string Phonenumber { get; set; }

        [Required]
        public string Password { get; set; }
    }
}