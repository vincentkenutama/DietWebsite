using DietWebsiteServer.Interface;

namespace DietWebsiteServer.Models
{
    public class Users : IJson
    {
        public string? status { get; set; }
        public int Id { get; set; }
        public string? Username {  get; set; }
        public string? Password { get; set; }
        public string? Nama { get; set; }
        public int Age { get; set; }
        public string? Gender {  get; set; }
        public string? Picture { get; set; }
        string? IJson.status { get => status; set => status = value; }

        public Users()
        {

        }

        public Users(string? username, string? password)
        {
            this.Username = username;
            this.Password = password;
        }

        public Users(string? password)
        {
            this.Password = password;
        }

        public Users(int id, string? username, string? password, string? nama, int age, string? gender)
        {
            Id = id;
            Username = username;
            Password = password;
            Nama = nama;
            Age = age;
            Gender = gender;
        }
    }
}
