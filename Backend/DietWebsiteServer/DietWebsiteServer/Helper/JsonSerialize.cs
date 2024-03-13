using DietWebsiteServer.Interface;
using System.Text.Json;

namespace DietWebsiteServer.Helper
{
    public class JsonSerialize 
    {
        public string? Status { get; set; }

        public Object Data { get; set; }

        public JsonSerialize()
        {

        }

        public JsonSerialize(string status, Object data)
        {
            Status = status;
            Data = data;

        }
        //public void SetStatus(string status)
        //{
        //    this.status = status;
        //}
        public void Serialize(string status, IJson data)
        {
            Status = status;
            Data = data;
            
        }

        public string GetSerializaton()
        {
            if (Status == "" || Status == null) Status = "Not Found"; 
            return JsonSerializer.Serialize(this);
   
        }
    }
}
