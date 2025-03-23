using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using new_site.DataModel;

namespace new_site.Pages
{
    
    public class Registration_formModel : PageModel
    {
        
        [BindProperty]
        public string errorMessage { get; set; }
        public User? user { get; set; }
        public string st { get; set; }
        public void OnGet()
        {
        }
        
        public IActionResult OnPost()
        {
            
            DBHelper1 dB = new DBHelper1();
            int numRowsAffected = dB.Insert(user, "usersTBL");
            if (numRowsAffected != 1)
            {
                errorMessage = "This email is already registered";
                return Page();
            }
            return RedirectToPage("/Home_page");
            
        }
        

    }
    
}
