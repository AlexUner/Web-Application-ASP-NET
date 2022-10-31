using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Web_Application_ASP_NET.Pages
{
    public class InfoModel : PageModel
    {
        public void OnGet()
        {
            string Developer = "Bondarenko Alexandr";
            string Organization = "self-employed";

            TimeSpan TotalTime = DateTime.Now.Subtract(new DateTime(2018, 1, 1, 0, 0, 0));

            string dateTime = "Work experience: " + TotalTime.Days/360 + "y " + 
                (TotalTime.Days%360)/30 +"m " + (TotalTime.Days % 360) % 30 + "d";

            List<string> skills = new List<string> {
                "C/C++",
                "SQL",
                "Assembler",
                "Python",
                "C#",
                "VBA"
            };

            Dictionary<string, string> contacts = new Dictionary<string, string> {
                {"Mobile phone", "+79661985006" },
                {"Email", "alexandr20042001@mail.ru" }
            };

            ViewData["Developer"] = Developer;
            ViewData["Organization"] = Organization;
            ViewData["WorkExperience"] = dateTime;
            ViewData["skills"] = skills;
            ViewData["contacts"] = contacts;
        }
    }
}
