using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site.DataModel;

namespace new_site.Pages
{
    public class TheRealSugarModel : PageModel
    {
        public IActionResult OnGet()
        {
            DBHelper1 dBHelper1 = new DBHelper1();

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

    }
}
