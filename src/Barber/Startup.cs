using Microsoft.AspNet.Builder;
using Microsoft.Data.Entity;
using Barber.Models;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.Extensions.Configuration;

namespace Barber
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }

        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
        {
            // Setup configuration sources.   
            var builder = new ConfigurationBuilder()
                .AddJsonFile("config.json");

            //builder.AddEntityFramework(options => options.UseSqlServer(config["Data:DefaultConnection:ConnectionString"]));
            builder.AddEnvironmentVariables();
            Configuration = builder.Build();

        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<BarberContext>(options => {
                    options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]);
            });

            services.AddMvc()
                .AddJsonOptions(options => {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            });
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseStaticFiles();
            app.UseDefaultFiles(new Microsoft.AspNet.StaticFiles.DefaultFilesOptions() { DefaultFileNames = new[] { "index.html" } });
            app.UseMvc();
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
