using Microsoft.Extensions.DependencyInjection;
using System;

namespace new_site
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDistributedMemoryCache();
            builder.Services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(60);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });

            builder.Services.AddMemoryCache();

            builder.Services.AddSession();
            // Add services to the container.
            builder.Services.AddRazorPages();

            builder.Services.AddSingleton<VisitorService>();

            var app = builder.Build();

            ServiceProviderAccessor.ServiceProvider = app.Services;

            app.UseSession();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
            }
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapRazorPages();

            app.Run();


        }
    }
    public static class ServiceProviderAccessor
    {
        public static IServiceProvider ServiceProvider { get; set; }
    }
    public class VisitorService
    {
        private int visitorCount = 0;
        public int GetVisitorCount() => visitorCount;
        public void IncrementVisitorCount() => visitorCount++;
    }
    public class ActiveVisitorService
    {
        private int AcvisitorCount = 0;
        public int GetAcVisitorCount() => AcvisitorCount;
        public void IncrementAcVisitorCount() => AcvisitorCount++;
    }

}
