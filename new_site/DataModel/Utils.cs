using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Data;
using new_site.DataModel;

namespace new_site.DataModel
{
    public class Utils
    {
        // Database file name
        public const string DB_FILE = "tableDB.mdf";

        // Database users table name
        public const string DB_USERS_TABLE = "usersTBL";

        // Configuration database file name
        public const string CONFIG_DB_FILE = "new_siteDB";

        // Default username for guest users
        public const string VALUE_USERNAME_GUEST = "Guest";

        // Keys for session or view data storage
        public const string KEY_USER_NAME = "userName";
        public const string KEY_ERROR_MESSAGE = "errorMessage";
        public const string KEY_ROLE = "Role";

        // Role constants
        public const string KEY_ROLE_ADMIN = "Admin";
        public const string KEY_ROLE_USER = "User";
        public const string KEY_ROLE_GUEST = "Guest";
    }
}
