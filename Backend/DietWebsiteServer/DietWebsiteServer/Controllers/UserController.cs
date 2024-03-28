using Microsoft.AspNetCore.Mvc;
using DietWebsiteServer.Database;
using System.Data.Entity;
using DietWebsiteServer.Models;
using System.Text.Json;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Microsoft.AspNetCore.Routing.Template;

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

        //public void Coba(<T> )
        //{

        //}

        [HttpPost]
        public async Task<string> Update(string oldUser, string newUserData)
        {
            Users oldUserData = JsonSerializer.Deserialize<Users>(oldUser);
            Users updatedUserData = JsonSerializer.Deserialize<Users>(newUserData);

            return await UserHandler.UpdateUser(oldUserData, updatedUserData);

        }
    }
}
    