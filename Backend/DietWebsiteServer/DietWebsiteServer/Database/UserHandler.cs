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

        /// <summary>
        /// Gunakan untuk membuat user baru
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <param name="nama"></param>
        /// <param name="age"></param>
        /// <param name="gender"></param>
        /// <returns></returns>
        public static async Task<string> SignUp(string username, string password, string nama, string age, string gender)
        {
            await Console.Out.WriteLineAsync($"Input {username} {password} {nama} {age} {gender}");
            DatabaseHandler handler = new DatabaseHandler();
            StatusCodeJson jsonstatus = new StatusCodeJson();
            Users user = new Users();

            /* Langkah :
                1. Cari semua username jika terjadi kesamaan
                2. Jika tidak ada baru masukkan data baru
            */

            try
            {
                string query = $"SELECT USERNAME FROM PENGGUNA WHERE USERNAME = \"{username}\"";

                MySqlConnection conn = await handler.ConnectToDatabase();
                MySqlCommand cmd = new MySqlCommand(query, conn);
                MySqlDataReader reader = (MySqlDataReader) await cmd.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    user.Username = reader[0].ToString();
                    await Console.Out.WriteLineAsync($"wtf {reader[0]} {username}");
                }

                reader.Close();
                
                //Periksa apakah terdapat kesamaan dengan username sebelumnya
                if (user.Username == username) 
                {
                    await Console.Out.WriteLineAsync("Username telah terpakai...");
                    jsonstatus.status = "Username telah dipakai!";
                    await handler.CloseConnection();
                    return JsonSerializer.Serialize(jsonstatus);
                }

                //Tidak ada kesamaan dengan username sebelumnya

                Users signUpUser = new Users(username, password, nama, Convert.ToInt16(age), gender);

                try
                {
                    //query = $"INSERT INTO PENGGUNA (username, password, nama, age, gender) " +
                    //        $"VALUES (\"{username}\", \"{password}\", \"{nama}\", {age}, \"{gender}\")";
                   query =  $"INSERT INTO PENGGUNA (username, password, nama, age, gender) " +
                            $"VALUES (\"{username}\", \"{password}\", \"{nama}\", {Convert.ToInt16(age)}, \"{gender}\")";
                   cmd = new MySqlCommand(query, conn);
                   cmd.ExecuteNonQuery();

                }
                catch (Exception ex)
                {
                    await Console.Out.WriteLineAsync(ex.ToString());
                }

                JsonSerialize serialize = new JsonSerialize();
                serialize.Serialize("ok", signUpUser);
                
                await Console.Out.WriteLineAsync("Username aman");
                await handler.CloseConnection();

                return serialize.GetSerializaton();
            }
            catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.ToString());
                jsonstatus.CodeNotFound();
            }

            return JsonSerializer.Serialize(jsonstatus);
        }

        /// <summary>
        /// Untuk mengambil data profile picture dari user
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        public static async Task<string> GetProfilePicture(string username)
        {
            DatabaseHandler handler = new DatabaseHandler();

            StatusCodeJson jsonstatus = new StatusCodeJson();
            Users user = new Users();
            string query = $"SELECT PICTURE FROM PENGGUNA WHERE USERNAME = {username}";

            try
            {
                MySqlConnection conn = await handler.ConnectToDatabase();
                MySqlCommand cmd = new MySqlCommand(query, conn);
                MySqlDataReader reader = (MySqlDataReader) await cmd.ExecuteReaderAsync();

                while(await reader.ReadAsync())
                {
                    user.Picture = reader[0].ToString();

                }

                await handler.CloseConnection();

                if(user.Picture != "") return JsonSerializer.Serialize(user);

            }
            catch (Exception ex)
            {
                jsonstatus.CodeNotFound();
            }
            
            return JsonSerializer.Serialize(jsonstatus);

        }

        /// <summary>
        /// Untuk mengambil seluruh informasi dari user
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        public static async Task<string> GetUserInformation(string username)
        {
            DatabaseHandler handler = new DatabaseHandler();

            StatusCodeJson jsonstatus = new StatusCodeJson();
            Users user = new Users();
            string query = $"SELECT * FROM PENGGUNA WHERE USERNAME = \"{username}\"";

            await Console.Out.WriteLineAsync($"username : {username}");

            try
            {
                MySqlCommand cmd = new MySqlCommand(query, await handler.ConnectToDatabase());
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
                await handler.CloseConnection();

                return JsonSerializer.Serialize(user);

            }
            catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.ToString());
                jsonstatus.CodeNotFound();
                
            }
            await handler.CloseConnection();

            return JsonSerializer.Serialize(jsonstatus);
        }

        
        public static async Task<string> UpdateUser(Users oldUser,Users updatedUser)
        {
            DatabaseHandler db = new DatabaseHandler();
            StatusCodeJson status = new StatusCodeJson();
            MySqlCommand cmd;
            string? query;

            await Console.Out.WriteLineAsync($"username : {oldUser.Username} pass : {updatedUser.Username}");
            try
            {
                query = $"""
                            UPDATE PENGGUNA 
                            SET PASSWORD = "{updatedUser.Username}"
                            WHERE USERNAME = "{oldUser.Username}"
                    """;

                cmd = new MySqlCommand(query,await db.ConnectToDatabase());
                await cmd.ExecuteNonQueryAsync();

                return "ok";
            }
            catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.ToString());
                return ex.ToString();
            }
        }
    }
}

