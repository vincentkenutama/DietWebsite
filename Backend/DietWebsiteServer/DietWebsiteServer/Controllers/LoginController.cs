using Microsoft.AspNetCore.Mvc;
using DietWebsiteServer.Database;
using System.Data.Entity.Core.Objects;
using DietWebsiteServer.Models;
using MySql.Data.MySqlClient;
using DietWebsiteServer.Interface;
using DietWebsiteServer.Helper;
using DietWebsiteServer.Database;

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

        [HttpPost]
        public async Task<string> Signin(string username, string password)
        {
            Console.WriteLine($"user : {username} pass : {password}");
            return await LoginHandler.Auth(username, password);
        }

    }
}
