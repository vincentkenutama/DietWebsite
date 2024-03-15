using Microsoft.AspNetCore.Mvc;
using DietWebsiteServer.Database;

namespace DietWebsiteServer.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<string> Picture(string username)
        {
            return await UserHandler.GetProfilePicture(username);
        }
    }
}
