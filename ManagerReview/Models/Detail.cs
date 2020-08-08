using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ManagerReview.Models {
    public class Detail{

        [Key]
        public int managerid { get; set; }
        public string firstname{get; set;}
        public string lastname{get; set;}
        public string company{get; set;}
        public string team{get; set;}
        
    }
}