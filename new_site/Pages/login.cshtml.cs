using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site.DataModel;
using System.Data;

namespace new_site.Pages
{
    public class loginModel : PageModel
    {
        [BindProperty]
        public string? login_email { get; set; }  // Property bound to the login email input

        [BindProperty]
        public string? login_password { get; set; }  // Property bound to the login password input

        public User user { get; set; } = new User();  // User object to hold user data after login
        public int StillLogined { get; set; }  // Tracks how many times the user has logged in this session

        public void OnGet()
        {
            // Retrieve the number of times user has logged in from session, or 0 if not set
            StillLogined = HttpContext.Session.GetInt32("still_logined") ?? 0;
        }

        public IActionResult OnPost()
        {
            DBHelper1 dbHelper = new DBHelper1();  // Database helper instance
            DataTable userTable;

            // SQL query to find user with matching email and password (WARNING: vulnerable to SQL injection)
            string sqlQuery = $"SELECT * FROM {Utils.DB_USERS_TABLE} WHERE Email = '{login_email}' AND Password ='{login_password}'";

            userTable = dbHelper.RetrieveTable(sqlQuery, "usersTBL");  // Execute query and get user data

            if (userTable.Rows.Count != 1)
            {
                return Page();  // Login failed, reload the login page
            }

            // Update or initialize login count in session
            if (HttpContext.Session.GetInt32("still_logined") == null)
            {
                HttpContext.Session.SetInt32("still_logined", 1);
            }
            else
            {
                HttpContext.Session.SetInt32("still_logined", HttpContext.Session.GetInt32("still_logined").Value + 1);
            }

            // Set user ID from retrieved data
            user.ID = Convert.ToInt32(userTable.Rows[0]["Id"]);

            // Set cookie options with 2-hour expiration
            CookieOptions cookieOptions = new CookieOptions();
            cookieOptions.Expires = DateTime.Now.AddHours(2);

            // Append cookies for user's first name and ID
            Response.Cookies.Append("name", userTable.Rows[0]["first_name"].ToString(), cookieOptions);
            Response.Cookies.Append("ID", user.ID.ToString(), cookieOptions);

            // Increment visitor count using injected VisitorService
            VisitorService visitorService = ServiceProviderAccessor.ServiceProvider.GetService<VisitorService>();
            visitorService.IncrementVisitorCount();

            // Store user's first name in session
            HttpContext.Session.SetString("firstName", userTable.Rows[0]["first_name"].ToString());

            // Redirect to home page after successful login
            return RedirectToPage("/Home_page");
        }
    }
}
