using System.Data;
using new_site.DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site;
using new_site.Model;
using new_site.Pages;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using System.Collections.Generic;
using System.Reflection;
namespace new_site.Pages

{
    public class Quary_pageModel : PageModel
    {
        public DataTable? DataTableUsers { get; set; }
        public string filter_value { get; set; }
        public string filter_column { get; set; } = string.Empty;
        public string sqlQuery { get; private set; }
        public void OnGet()
        {
            DBHelper1 dBHelper1 = new DBHelper1();
            if (!string.IsNullOrEmpty(filter_value))
            {
                sqlQuery += $" WHERE {filter_column} LIKE '%{filter_value}%'";
            }
        }
        public string[] DisplayColumns { get; set; } = { "ID", "full name", "first name", "last name", "prefix", "phone number", "email", "year born", "gender", "City", "pw" };

    }
}
