using System;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using DietWebsiteServer.API;
using DietWebsiteServer.Helper;
using DietWebsiteServer.Models;
using DietWebsiteServer.Interface;

namespace DietWebsiteServer.Database
{
    public class LoginHandler 
    {
        
        public static string Auth(string username, string password)
        {
            JsonSerialize json = new JsonSerialize();
            Users user = new Users();

            string query_string = $"SELECT username, password, nama FROM PENGGUNA WHERE username = \"{username}\"";

            try
            {
                MySqlConnection con = DatabaseHandler.ConnectToDatabase();
                MySqlCommand command = new MySqlCommand(query_string, con);
                MySqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    user.Username = reader[0].ToString();
                    user.Password = reader[1].ToString();
                    user.Nama = reader[2].ToString();
                    break;
                }

                Console.WriteLine($"password {password}");


                if (user.Password != password && user.Username != null) json.Serialize("Wrong Password", user); 
                if (user.Password == password)  json.Serialize("Valid", user); 

                con.Close();

                //Console.WriteLine(json.GetSerializaton());

                return json.GetSerializaton();
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }
            finally
            {
             
            }
        }

    }
}
