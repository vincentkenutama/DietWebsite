﻿using DietWebsiteServer.Interface;
using System.Data.Entity;

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
        public string? BirthDate { get; set; }
        public string? Email { get; set; }
        public string? Number { get; set; }

        public Users()
        {

        }

        public Users(string username)
        {
            this.Username = username;
        }

        public Users(string? username, string? password)
        {
            this.Username = username;
            this.Password = password;
        }

        //public Users(string? password)
        //{
        //    this.Password = password;
        //}

        public Users(int id, string? username, string? password, string? nama, int age, string? gender)
        {
            Id = id;
            Username = username;
            Password = password;
            Nama = nama;
            Age = age;
            Gender = gender;
        }

        public Users(string? username, string? password, string? nama, int age, string? gender)
        {
            Username = username;
            Password = password;
            Nama = nama;
            Age = age;
            Gender = gender;
        }
    }
}
