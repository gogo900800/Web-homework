using System.Data;
using new_site.DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site;
using new_site.Pages;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using System.Collections.Generic;
using System.Reflection;


namespace new_site.Pages
{
    public class ShowModel : PageModel
    {
        public DataTable? DataTableUsers { get; set; }
        public string sqlQuery { get; private set; }
        public IActionResult OnGet()
        {
            sqlQuery = $"SELECT * FROM {Utils.DB_USERS_TABLE}";
            DBHelper1 dBHelper = new DBHelper1();
            DataTableUsers = dBHelper.RetrieveTable(sqlQuery,"usersTBL");
            string userId = Request.Cookies["ID"];

            // If cookie is missing, block access
            if (userId == null)
            {
                return RedirectToPage("/Access_no");
            }

            int id = Convert.ToInt32(userId);

            // If not admin, block access
            if (dBHelper.GetAdminById(id) == null)
            {
                return RedirectToPage("/Access_no");
            }

            // If all checks passed, allow access
            return Page();

            return Page();
        }
        public string[] DisplayColumns { get; set; } = { "ID", "First Name", "Last Name", "Phone Number", "Year Born", "Gender", "Email", "Password" };
    }
}