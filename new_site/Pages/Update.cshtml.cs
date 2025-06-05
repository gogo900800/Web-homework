using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site.DataModel;

namespace new_site.Pages
{

    public class UpdateModel : PageModel
    {
        [BindProperty]
        public string errorMessage { get; set; } = string.Empty;
        [BindProperty]
        public User? user { get; set; }
        public string st { get; set; }

        public string[] Prefix = { "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "02", "03", "04", "08", "09", };
        public void OnGet()
        {
            string? userId = Request.Cookies["ID"];
            if (!string.IsNullOrEmpty(userId))
            {
                int id = Convert.ToInt32(userId);
                DBHelper1 dbHelper = new DBHelper1();
                user = dbHelper.GetUserById(id);
            }
        }

        public IActionResult OnPost()

        {
            string? userId = Request.Cookies["ID"];
            if (string.IsNullOrEmpty(userId))
            {
                errorMessage = "User ID is missing!";
                return Page();
            }

            int id = Convert.ToInt32(userId);
            DBHelper1 dbHelper = new DBHelper1();
            User existingUser = dbHelper.GetUserById(id);
            if (existingUser == null)
            {
                errorMessage = "User not found!";
                return Page();
            }
            if (!string.IsNullOrEmpty(user?.Password))
            {
                existingUser.Password = user.Password;
            }
            if (!string.IsNullOrEmpty(user?.Email))
            {
                existingUser.Email = user.Email;
            }
            if (!string.IsNullOrEmpty(user?.Phone))
            {
                existingUser.Phone = user.Phone;
            }
            if (!string.IsNullOrEmpty(user?.PrefixID))
            {
                existingUser.PrefixID = user.PrefixID;
            }
            else
            {
                errorMessage = "Password is required!";
                return Page();
            }

            int numRowsAffected = dbHelper.Update(existingUser, "usersTBL");
            if (numRowsAffected != 1)
            {
                errorMessage = "Update failed!";
                return Page();
            }

            return RedirectToPage("/Home_page");
        }





    }

}
