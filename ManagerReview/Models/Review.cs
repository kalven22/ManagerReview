using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ManagerReview.Models
{
    public class Review
    {
        [Key]
        public int reviewid { get; set; }
        [ForeignKey("managerid")]
        public int managerid { get; set; }
        public string? review { get; set; }
        public string? advice { get; set; }
        public int? fivestarrating { get; set; }
        public string? approve { get; set; }
    
    }
    
}
