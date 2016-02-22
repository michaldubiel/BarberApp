using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Barber.Models;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Barber.API
{
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly BarberContext _dbContext;

        public EmployeesController(BarberContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return _dbContext.Employees;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var employee = _dbContext.Employees.Include(b => b.Activities).SingleOrDefault(a => a.Id == id);
            if (employee == null)
            {
                return new HttpNotFoundResult();
            }
            else {
                return new ObjectResult(employee);
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Employee employee)
        {
            //if (employee.Id == 0)
            //{
                _dbContext.Employees.Add(employee);
                _dbContext.SaveChanges();
                return new ObjectResult(employee);
            //}
            //else
            //{
            //  var original = _dbContext.Employees.FirstOrDefault(m => m.Id == employee.Id);
            //  original.FirstName = employee.FirstName;
            //  original.LastName = employee.LastName;
            //  _dbContext.SaveChanges();
            //  return new ObjectResult(original);
            //}
        }

        // PUT api/values/5
        [HttpPut]
        public IActionResult Put([FromBody]Employee employee)
        {
            var original = _dbContext.Employees.FirstOrDefault(m => m.Id == employee.Id);
            original.FirstName = employee.FirstName;
            original.LastName = employee.LastName;
            _dbContext.SaveChanges();
            return new ObjectResult(original);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var employee = _dbContext.Employees.FirstOrDefault(m => m.Id == id);
            _dbContext.Employees.Remove(employee);
            _dbContext.SaveChanges();
            return new HttpStatusCodeResult(200);
        }
    }
}
