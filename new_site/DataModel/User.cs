using System.ComponentModel.DataAnnotations;

namespace new_site.DataModel
{
    public class User
    {
        public int ID { get; set; }
        public string? firstName { get; set; } = string.Empty;
        public string? lastName { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;
        public int? birthYear { get; set; } = int.MinValue;
        public string? Gender { get; set; } = string.Empty;
        public string? PrefixID { get; set; } = string.Empty;
        public string? Phone { get; set; } = string.Empty;
        public string? City { get; set; } = string.Empty;
        [Required]
        public string? Password { get; set; } = string.Empty;
    }
}