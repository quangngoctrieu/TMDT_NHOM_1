using System.ComponentModel.DataAnnotations;
namespace AlohaApi.DTOs.Input

{
    public class LoginInput
    {
        [Required]
        public string Phonenumber { get; set; }
        [Required]
        public string Password { get; set; }
    }
}