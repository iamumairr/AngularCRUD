using System.ComponentModel.DataAnnotations;

namespace AngularCRUD.Models;

public class Product
{
    public int Id { get; set; }
    [StringLength(100)]
    [Required(ErrorMessage = "{0} is required.")]
    public string? Name { get; set; }
    [Required]
    [EmailAddress]
    public string? Email { get; set; }
    public string? Address { get; set; }
}