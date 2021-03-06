﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Barber.Models
{
    public class Employee
    {
        public Employee()
        {
            Activities = new List<Activity>();
        }

        [Key]
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }   
        
        public List<Activity> Activities { get; set; } 
    }
}
