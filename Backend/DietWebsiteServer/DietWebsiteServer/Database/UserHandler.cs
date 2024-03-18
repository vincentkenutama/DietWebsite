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
            while (DatabaseHandler.conn.State == System.Data.ConnectionState.Open) ;

            StatusCodeJson jsonstatus = new StatusCodeJson();
            Users user = new Users();
            string query = $"SELECT PICTURE FROM PENGGUNA WHERE USERNAME = {username}";

            try
            {
                MySqlConnection conn = await DatabaseHandler.ConnectToDatabase();
                MySqlCommand cmd = new MySqlCommand(query, conn);
                MySqlDataReader reader = (MySqlDataReader) await cmd.ExecuteReaderAsync();

                while(await reader.ReadAsync())
                {
                    user.Picture = reader[0].ToString();

                }

                await DatabaseHandler.CloseConnection();

                if(user.Picture != "") return JsonSerializer.Serialize(user);

            }
            catch (Exception ex)
            {
                jsonstatus.CodeNotFound();
            }
            
            return JsonSerializer.Serialize(jsonstatus);

        }

        public static async Task<string> GetUserInformation(string username)
        {
            while (DatabaseHandler.conn.State == System.Data.ConnectionState.Open);

            StatusCodeJson jsonstatus = new StatusCodeJson();
            Users user = new Users();
            string query = $"SELECT * FROM PENGGUNA WHERE USERNAME = \"{username}\"";

            await Console.Out.WriteLineAsync($"username : {username}");

            try
            {
                MySqlCommand cmd = new MySqlCommand(query, await DatabaseHandler.ConnectToDatabase());
                MySqlDataReader reader = (MySqlDataReader) await cmd.ExecuteReaderAsync();


                while (await reader.ReadAsync())
                {
                    user.Id = Convert.ToInt16(reader[0]);
                    user.Username = reader[1].ToString();   
                    user.Nama = reader[3].ToString();
                    user.Age = Convert.ToInt16(reader[4]);
                    user.Gender = reader[5].ToString();
                    user.Picture = reader[6].ToString();
                }

                await Console.Out.WriteLineAsync("reading success... closing...");
                await DatabaseHandler.CloseConnection();

                return JsonSerializer.Serialize(user);

            }
            catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.ToString());
                jsonstatus.CodeNotFound();
                
            }
            await DatabaseHandler.CloseConnection();

            return JsonSerializer.Serialize(jsonstatus);
        }
    }
}

