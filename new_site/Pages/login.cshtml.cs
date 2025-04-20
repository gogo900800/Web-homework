using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site.DataModel;
using new_site.Model;
using System.Data;

namespace new_site.Pages
{
    public class loginModel : PageModel
    {

        [BindProperty]
        public string? login_email { get; set; }

        [BindProperty]
        public string? login_password { get; set; }
        public User user { get; set; } = new User();
        public int StillLogined { get; set; }
        public bool IsBoss { get; set; } = true;
        public void OnGet()

        {
            StillLogined = HttpContext.Session.GetInt32("still_logined") ?? 0;
        }
        public IActionResult OnPost()
        {
            DBHelper1 dbHelper = new DBHelper1();
            DataTable userTable;
            string sqlQuery = $"SELECT * FROM {Utils.DB_USERS_TABLE} WHERE Email = '{login_email}' AND Password ='{login_password}'";
            userTable = dbHelper.RetrieveTable(sqlQuery, "usersTBL");
            if (userTable.Rows.Count != 1)
            {
                return Page();
            }

            if (HttpContext.Session.GetInt32("still_logined") == null)
            {
                HttpContext.Session.SetInt32("still_logined", 1);
            }
            else
            {
                HttpContext.Session.SetInt32("still_logined", HttpContext.Session.GetInt32("still_logined").Value + 1);
            }

            user.ID = Convert.ToInt32(userTable.Rows[0]["Id"]);
            CookieOptions cookieOptions = new CookieOptions();
            cookieOptions.Expires = DateTime.Now.AddHours(2);

            Response.Cookies.Append("name",userTable.Rows[0]["first_name"].ToString(), cookieOptions);
            Response.Cookies.Append("ID", user.ID.ToString(), cookieOptions);


            VisitorService visitorService = ServiceProviderAccessor.ServiceProvider.GetService<VisitorService>();
            visitorService.IncrementVisitorCount();
            HttpContext.Session.SetString("firstName", userTable.Rows[0]["first_name"].ToString());
            return RedirectToPage("/Home_page");
        }
    }
}
