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

        [HttpPost]
        public async Task<string> Signup(string username, string password, string nama, string age, string gender)
        {
            await Console.Out.WriteLineAsync($"test {username} - {nama}");
            return await UserHandler.SignUp(username, password, nama, age, gender);
        }
    }
}
