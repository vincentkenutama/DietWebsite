using System;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using DietWebsiteServer.API;

namespace DietWebsiteServer.Database
{
    public class LoginHandler
    {
        
        public static string Auth()
        {
            MySqlConnection connection;

            Console.WriteLine("Login entry point...");
            connection = DatabaseHandler.ConnectToDatabase();

            return "test";
        }

    }
}
