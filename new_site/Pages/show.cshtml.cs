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
    public class ShowModel : PageModel
    {
        public DataTable? DataTableUsers { get; set; }
        public string sqlQuery { get; private set; }
        public IActionResult OnGet()
        {
            sqlQuery = $"SELECT * FROM {Utils.DB_USERS_TABLE}";

            return Page();
        }
        public string[] DisplayColumns { get; set; } = { "ID", "full name", "first name", "last name", "prefix", "phone number", "email", "year born", "gender", "City", "pw" };
    }
}