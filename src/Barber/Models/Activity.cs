using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Barber.Models
{
    public class Activity
    {
        [Key]
        public int Id { get; set; }

        public int Status { get; set; }

        public string Title { get; set; }

        public string Client { get; set; }

        [Column(TypeName = "DateTime2")]
        public DateTime Date { get; set; }

        public double Price { get; set; }

        public int EmployeeId { get; set; }

        public Employee Employee { get; set; }

    }
}
