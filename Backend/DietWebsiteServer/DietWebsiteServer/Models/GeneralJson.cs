using DietWebsiteServer.Interface;

namespace DietWebsiteServer.Models
{
    public class GeneralJson : IJson
    {
        public string? status { get; set; }
        private List<string> Data { get; set; } = new List<string>();

        

    }
}
