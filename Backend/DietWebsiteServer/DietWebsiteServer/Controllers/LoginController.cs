using Microsoft.AspNetCore.Mvc;
using DietWebsiteServer.API;
using DietWebsiteServer.Database;
using System.Data.Entity.Core.Objects;

namespace DietWebsiteServer.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet]
        public string Index(string username, string password)
        {
            Console.WriteLine(username +  password);

            return "wkw";
        }
    }
}
