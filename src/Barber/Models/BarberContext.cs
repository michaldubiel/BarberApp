using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace Barber.Models
{
    public class BarberContext : DbContext
    {
        public DbSet<Activity> Activities { get; set; }

        public DbSet<Employee> Employees { get; set; }
    }

}
