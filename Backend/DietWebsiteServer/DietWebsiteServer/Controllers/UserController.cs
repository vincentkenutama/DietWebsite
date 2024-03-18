using Microsoft.AspNetCore.Mvc;
using DietWebsiteServer.Database;
using System.Data.Entity;

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

        [HttpGet]
        public async Task<string> GetUser(string username)
        {
            return await UserHandler.GetUserInformation(username);
        }
    }
}
