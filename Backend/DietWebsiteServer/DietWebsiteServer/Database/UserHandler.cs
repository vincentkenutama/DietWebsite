using DietWebsiteServer.API;
using DietWebsiteServer.Helper;
using DietWebsiteServer.Models;
using Microsoft.Identity.Client;
using MySql.Data.MySqlClient;
using System.Text.Json;

namespace DietWebsiteServer.Database
{
    public class UserHandler
    {
        public UserHandler() { }

        public static async Task<string> GetProfilePicture(string username)
        {

            StatusCodeJson jsonstatus = new StatusCodeJson();
            Users user = new Users();
            string query = $"SELECT PICTURE FROM PENGGUNA WHERE USERNAME = {username}";

            try
            {
                MySqlCommand cmd = new MySqlCommand(query, DatabaseHandler.ConnectToDatabase());
                MySqlDataReader reader = (MySqlDataReader) await cmd.ExecuteReaderAsync();

                while(await reader.ReadAsync())
                {
                    user.Picture = reader[0].ToString();

                }

                DatabaseHandler.CloseConnection();

                if(user.Picture != "") return JsonSerializer.Serialize(user);

            }
            catch (Exception ex)
            {
                jsonstatus.CodeNotFound();
            }
            
            return JsonSerializer.Serialize(jsonstatus);

        }
    }
}

