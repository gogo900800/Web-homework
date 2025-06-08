using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site.DataModel;

namespace new_site.Pages
{
    public class UpdateModel : PageModel
    {
        [BindProperty]
        public string errorMessage { get; set; } = string.Empty;  // Holds error message to show on page

        [BindProperty]
        public User? user { get; set; }  // Bound property for the User data

        public string st { get; set; }  // Not used currently

        public string[] Prefix = { "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "02", "03", "04", "08", "09", }; // Phone prefixes

        // Handle GET request - load user info based on cookie ID
        public void OnGet()
        {
            string? userId = Request.Cookies["ID"];
            if (!string.IsNullOrEmpty(userId))
            {
                int id = Convert.ToInt32(userId);
                DBHelper1 dbHelper = new DBHelper1();
                user = dbHelper.GetUserById(id); // Load user data for editing
            }
        }

        // Handle POST request - update user info
        public IActionResult OnPost()
        {
            string? userId = Request.Cookies["ID"];
            if (string.IsNullOrEmpty(userId))
            {
                errorMessage = "User ID is missing!";  // If no user ID, show error
                return Page();
            }

            int id = Convert.ToInt32(userId);
            DBHelper1 dbHelper = new DBHelper1();
            User existingUser = dbHelper.GetUserById(id);
            if (existingUser == null)
            {
                errorMessage = "User not found!";  // If user not found in DB, show error
                return Page();
            }

            // Update password if provided
            if (!string.IsNullOrEmpty(user?.Password))
            {
                existingUser.Password = user.Password;
            }

            // Update email if provided
            if (!string.IsNullOrEmpty(user?.Email))
            {
                existingUser.Email = user.Email;
            }

            // Update phone if provided
            if (!string.IsNullOrEmpty(user?.Phone))
            {
                existingUser.Phone = user.Phone;
            }
            else
            {
                return Page();  // Phone is mandatory? Return page if empty
            }

            // Update user in database
            int numRowsAffected = dbHelper.Update(existingUser, "usersTBL");
            if (numRowsAffected != 1)
            {
                errorMessage = "Update failed!";  // If update failed, show error
                return Page();
            }

            // On successful update, redirect to home page
            return RedirectToPage("/Home_page");
        }
    }
}
