using System;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;


namespace DietWebsiteServer.Database
{
    public class DatabaseHandler
    {
        private string Server = "localhost";
        private string User = "root";
        private int Port = 3306;
        private string Password = "admin";
        private string Database = "dietwebsitedatabase";
        //private string conn_str = "server=127.0.0.1;user=root;database=dietwebsitedatabase;port=3306;password=admin";
        private MySqlConnection Connector = new MySqlConnection("server=127.0.0.1;user=root;database=dietwebsitedatabase;port=3306;password=admin");

        public DatabaseHandler()
        {

        }

        public DatabaseHandler(string server, string username, int port, string password, string database)
        {
            Server = server;
            User = username;
            Port = port;
            Password = password;
            Database = database;
            Connector.ConnectionString = $"server={Server};user={User};database={Database};port={port};password={Password}";
        }

        public async Task<MySqlConnection> ConnectToDatabase()
        {
            if (Connector.ConnectionString == "") return Connector;

            try
            {
                Console.WriteLine("Connecting to database...");
                await Connector.OpenAsync();
                Console.WriteLine("Connection successful...");
                return Connector;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Connection failed..." + ex.Message);
                return Connector;
            }

        }

        public async Task CloseConnection()
        {
            while (Connector.State == ConnectionState.Open) await Connector.CloseAsync();

        }
    }
}
