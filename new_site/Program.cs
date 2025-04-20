using Microsoft.AspNetCore.Http;

namespace new_site
{
    public static class ServiceProviderAccessor
    {
        public static IServiceProvider ServiceProvider { get; set; }
    }

    public class VisitorService
    {
        private int _visitorCount = 0;

        public int GetVisitorCount() => _visitorCount;

        public void IncrementVisitorCount() => _visitorCount++;
    }

    public class Program
    {
        public static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddSingleton<VisitorService>();

            // for cookies
            builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            // DB Connection
            var dataDirectory = Path.Combine(builder.Environment.ContentRootPath, "App_Data");
            AppDomain.CurrentDomain.SetData("DataDirectory", dataDirectory);

            // Add services to the container.
            // This and seeting @page to "/" for the page we want to be the landing page
            builder.Services.AddRazorPages();
            //builder.Services.AddRazorPages(options =>
            //{
            //    options.Conventions.AddPageRoute("/ClassicCars", "");
            //});

            // Add Session service
            builder.Services.AddDistributedMemoryCache();
            builder.Services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(1);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });

            // Serverside Memory ==> Application
            builder.Services.AddMemoryCache();

            var app = builder.Build();

            // Set the ServiceProvider
            ServiceProviderAccessor.ServiceProvider = app.Services;

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            // OLD
            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapControllerRoute(
            //        name: "default",
            //        pattern: "{controller=Home}/{action=Index}/{id?}");
            //});


            // Server is loading
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthorization();

            app.UseSession();

            app.MapRazorPages();
            app.Run();
        }
    }
}
