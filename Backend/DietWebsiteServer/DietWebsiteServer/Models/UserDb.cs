using Microsoft.EntityFrameworkCore;

namespace DietWebsiteServer.Models
{
    public class UserDb : DbContext
    {
        public UserDb(DbContextOptions<UserDb> options) : base(options) { }
        public DbSet<Users> Users => Set<Users>();
    }
}
