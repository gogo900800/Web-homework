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
            HttpContext.Session.Clear();  // Clear all session data on logout
            Response.Cookies.Delete("name");  // Delete the "name" cookie
            Response.Cookies.Delete("ID");    // Delete the "ID" cookie
            HttpContext.Session.SetString(Utils.KEY_ROLE, Utils.KEY_ROLE_GUEST);  // Set user role to guest in session
            return RedirectToPage("/login");  // Redirect user to login page after logout
        }
    }
}
