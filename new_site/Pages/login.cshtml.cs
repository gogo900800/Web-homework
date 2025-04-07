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

        public void OnGet()
        {
        }
        public IActionResult OnPost()
        {
            DBHelper1 dbHelper = new DBHelper1();
            DataTable userTable;
            string sqlQuery = $"SELECT * FROM {Utils.DB_USERS_TABLE} WHERE Email = '{login_email}' AND Password ='{login_password}'";
            userTable = dbHelper.RetrieveTable(sqlQuery, "usersTBL");
            if(userTable.Rows.Count !=1 )
            {
                return Page();
            }
            HttpContext.Session.SetString("first_name", userTable.Rows[0]["first_name"].ToString());
            return RedirectToPage("/Home_page");
        }
    }
}
