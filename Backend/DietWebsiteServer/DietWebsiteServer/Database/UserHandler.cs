using DietWebsiteServer.Helper;
using DietWebsiteServer.Models;
using Microsoft.EntityFrameworkCore.Storage.Internal;
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
                    user.BirthDate = reader[7].ToString();
                    user.Email = reader[8].ToString();
                    user.Number = reader[9].ToString();
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

        
        public static async Task<string> UpdateUser(Users oldUserInformation,Users updatedUserInformation)
        {
            DatabaseHandler db = new DatabaseHandler();
            StatusCodeJson status = new StatusCodeJson();
            MySqlCommand cmd;
            MySqlDataReader reader;
            string? query;

            try
            {
                //Selecting if username is exist
                query = $"""
                            SELECT USERNAME, PASSWORD FROM PENGGUNA WHERE USERNAME = "{oldUserInformation.Username}"
                    """;

                cmd = new MySqlCommand(query,await db.ConnectToDatabase());
                reader = cmd.ExecuteReader();

                await Console.Out.WriteLineAsync("aaa");

                Users confirmationUser = new Users();

                while (await reader.ReadAsync())
                {
                    if(oldUserInformation.Username != reader[0].ToString() || oldUserInformation.Password != reader[1].ToString()) 
                    {
                        Console.WriteLine("password doesnt match");
                        StatusCodeJson statusCodeJson = new StatusCodeJson("invalid", "Invalid username or password!");
                        return JsonSerializer.Serialize(statusCodeJson);
                    }
                }

                
                await db.CloseConnection();

                //find the username if the username is exist before
                /*
                 * 1 -> Select id from database
                 * 2 -> Check if the user id is same or not with the new username
                 */

                query = $"""
                            SELECT ID FROM PENGGUNA WHERE USERNAME = "{updatedUserInformation.Username}"
                    """;

                cmd = new MySqlCommand(query, await db.ConnectToDatabase());
                reader = cmd.ExecuteReader();
               
                while (await reader.ReadAsync())
                {
                    if(oldUserInformation.Id != Convert.ToInt16(reader[0].ToString()))
                    {
                        Console.WriteLine("id doesnt match, or username existed");
                        StatusCodeJson s = new StatusCodeJson("Username existed");
                        return JsonSerializer.Serialize(s);
                    }
                }

                await db.CloseConnection();

                //updating the database
                query = $"""    
                            UPDATE PENGGUNA

                            SET USERNAME = "{updatedUserInformation.Username}",
                                PASSWORD = "{updatedUserInformation.Password}",
                                NAMA = "{updatedUserInformation.Nama}",
                                AGE = {updatedUserInformation.Age},
                                GENDER = "{updatedUserInformation.Gender}",
                                PICTURE = "{updatedUserInformation.Picture}",
                                BIRTHDATE = "{updatedUserInformation.BirthDate}",
                                EMAIL = "{updatedUserInformation.Email}",
                                NUMBER = "{updatedUserInformation.Number}"

                            WHERE USERNAME = "{oldUserInformation.Username}"
                            
                    """;
                cmd = new MySqlCommand(query, await db.ConnectToDatabase());
                cmd.ExecuteNonQuery();


                await db.CloseConnection();

                await Console.Out.WriteLineAsync("updated");
                StatusCodeJson statusCodeJson1 = new StatusCodeJson("notify", "Updated");
                return JsonSerializer.Serialize(statusCodeJson1);
            }
            catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.ToString());
                return ex.ToString();
            }
        }
    }
}

