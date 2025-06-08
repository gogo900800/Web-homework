using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site.DataModel;

namespace new_site.Pages
{
    public class DeleteModel : PageModel
    {
        // Message to be displayed after deletion (currently unused in OnGet)
        public string DeleteMessage;

        public IActionResult OnGet(int Id)
        {
            // Create a DBHelper instance
            DBHelper1 dBHelper1 = new DBHelper1();

            // Get the user ID from cookies
            string userId = Request.Cookies["ID"];

            // Check if the user is an admin based on the cookie ID
            if (userId != null)
            {
                int id = Convert.ToInt32(userId);
                if (dBHelper1.GetAdminById(id) == null)
                {
                    // Redirect to access denied page if not an admin
                    return RedirectToPage("/Access_no");
                }
            }

            // Double-check the user's role in session for admin rights
            if (HttpContext.Session.GetString(Utils.KEY_ROLE) != Utils.KEY_ROLE_ADMIN)
            {
                // Redirect to index if not an admin
                return RedirectToPage("/index");
            }

            // If the ID from query is valid (> 0), perform deletion
            if (Id > 0)
            {
                DBHelper1 db = new DBHelper1();

                // Prepare SQL query to delete user with specified ID
                string sql = $"DELETE FROM {Utils.DB_USERS_TABLE} WHERE Id = {Id}";

                // Execute deletion
                int result = db.ExecuteNonQuery(sql);
            }

            // Redirect to the query page after deletion
            return RedirectToPage("Quary_page");
        }
    }
}
