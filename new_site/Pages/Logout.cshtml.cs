using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site.Pages;
using new_site.DataModel;

namespace new_site.Pages
{
    public class LogoutModel : PageModel
    {
        public IActionResult OnGet()
        {
            HttpContext.Session.Clear();
            Response.Cookies.Delete("name");
            Response.Cookies.Delete("ID");
            HttpContext.Session.SetString(Utils.KEY_ROLE, Utils.KEY_ROLE_GUEST);
            return RedirectToPage("/login");
        }

    }
}