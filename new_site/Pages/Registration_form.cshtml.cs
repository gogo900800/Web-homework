using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site.DataModel;

namespace new_site.Pages
{
    
    public class Registration_formModel : PageModel
    {
        [BindProperty]
        public string errorMessage { get; set; }
        [BindProperty]
        public User? user { get; set; }
        public string st { get; set; }
        public string[] Prefix = {"050", "051", "052", "053", "054", "055", "056", "057", "058", "059","02", "03", "04", "08", "09",};

        public int[] BuildDropDownFieldsRange(int minValue, int maxValue)
        {
            int[] str = new int[maxValue-minValue];
            for (int i = minValue; i < maxValue; i++)
            {
                str[i - minValue] = i;
            }
            return str;
        }
        public void OnGet()
        {
        }
        public IActionResult OnPost()
        {
            if((user == null ||
                string.IsNullOrWhiteSpace(user.firstName) ||
                string.IsNullOrWhiteSpace(user.Password) ||
                string.IsNullOrWhiteSpace(user.Email)) ||
                string.IsNullOrWhiteSpace(user.PrefixID) ||
                string.IsNullOrWhiteSpace(user.Phone) ||
                string.IsNullOrWhiteSpace(user.Gender) ||
                ((user.birthYear) == null))
            {
                errorMessage = "All fields must be filled in.";
                return Page();
            }

            DBHelper1 dB = new DBHelper1();
            int numRowsAffected = dB.Insert(user, "usersTBL");

            if (numRowsAffected != 1)
            {
                errorMessage = "An error occurred during registration.";
                return Page();
            }

            return RedirectToPage("/Home_page");
        }



    }

}
