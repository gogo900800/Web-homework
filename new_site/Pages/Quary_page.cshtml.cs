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
    public class Quary_pageModel : PageModel
    {
        public DataTable? DataTableUsers { get; set; }  // Holds user data retrieved from DB

        [BindProperty(SupportsGet = true)]
        public string filter_value { get; set; }  // Filter value from query string (GET)

        [BindProperty(SupportsGet = true)]
        public string filter_column { get; set; } = string.Empty;  // Filter column from query string (GET)

        public string sqlQuery { get; private set; }  // SQL query string for retrieving users

        public IActionResult OnGet()
        {

            DBHelper1 dBHelper1 = new DBHelper1();

            // Add filter condition if filter value and column are provided
            if (!string.IsNullOrEmpty(filter_value) && !string.IsNullOrEmpty(filter_column))
            {
                sqlQuery += $" WHERE {filter_column} LIKE '%{filter_value}%'";
            }
            else
            {
                sqlQuery = "SELECT * FROM usersTBL";  // Show all users if no filter
            }

            DataTableUsers = dBHelper1.RetrieveTable(sqlQuery, "usersTBL");


            string userId = Request.Cookies["ID"];

            // If cookie is missing, block access
            if (userId == null)
            {
                return RedirectToPage("/Access_no");
            }

            int id = Convert.ToInt32(userId);

            // If not admin, block access
            if (dBHelper1.GetAdminById(id) == null)
            {
                return RedirectToPage("/Access_no");
            }

            // If all checks passed, allow access
            return Page();
        }

        // Columns to display in the users list
        public string[] DisplayColumns { get; set; } = { "ID", "First Name", "Last Name", "Prefix", "Phone Number", "Year Born", "Gender", "Email" };
    }
}
