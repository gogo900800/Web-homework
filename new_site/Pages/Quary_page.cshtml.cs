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
        public DataTable? DataTableUsers { get; set; }
        [BindProperty(SupportsGet = true)]
        public string filter_value { get; set; }

        [BindProperty(SupportsGet = true)]
        public string filter_column { get; set; } = string.Empty;

        public string sqlQuery { get; private set; }
        public void OnGet()
        {
            DBHelper1 dBHelper1 = new DBHelper1();
            sqlQuery = "SELECT * FROM usersTBL";
            if (!string.IsNullOrEmpty(filter_value) && !string.IsNullOrEmpty(filter_column))
            {
                sqlQuery += $" WHERE {filter_column} LIKE '%{filter_value}%'";
            }
            DataTableUsers = dBHelper1.RetrieveTable(sqlQuery, "usersTBL");
        }

        public string[] DisplayColumns { get; set; } = { "ID", "First Name", "Last Name", "Prefix", "Phone Number", "Year Born", "Gender", "Email", "City", "Password" };

    }
}
