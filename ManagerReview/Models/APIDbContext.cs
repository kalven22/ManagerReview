using Microsoft.EntityFrameworkCore;
using ManagerReview.Models;

namespace ManagerReview.Models
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(
            DbContextOptions<APIDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<Detail> Details { get; set; }      
        public DbSet<Review> Review { get; set; }
    }
    
}