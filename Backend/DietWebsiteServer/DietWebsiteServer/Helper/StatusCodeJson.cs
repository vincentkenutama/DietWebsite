using DietWebsiteServer.Interface;

namespace DietWebsiteServer.Helper
{
    public class StatusCodeJson : IJson
    {
        public string status {  get; set; }
        private string Code { get; set; } = "OK";

        public StatusCodeJson() 
        {
            
        }
        public StatusCodeJson(string code) 
        {
            status = code;
            Code = code;
        }

        public void CodeNotFound()
        {
            Code = "Not Found";
        }
    }
}
