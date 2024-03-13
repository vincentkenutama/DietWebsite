using System;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;


namespace DietWebsiteServer.API
{
    public class DatabaseHandler
    {
        static string conn_str = "server=127.0.0.1;user=root;database=dietwebsitedatabase;port=3306;password=admin";
        static MySqlConnection conn = new MySqlConnection(conn_str);

        public DatabaseHandler()
        {

        }

        public static MySqlConnection ConnectToDatabase()
        {
            try
            {
                Console.WriteLine("Connecting to database...");
                conn.Open();
                Console.WriteLine("Connection successful...");
                return conn;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection failed..." + ex.Message);
                return conn;
            }

        }

        public static void CloseConnection()
        {
            conn.Close();
        }
    }
}
