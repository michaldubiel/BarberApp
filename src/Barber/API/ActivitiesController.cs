using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Barber.Models;
using Microsoft.AspNet.Mvc;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Barber.API
{
    [Route("api/[controller]")]
    public class ActivitiesController : Controller
    {
        private readonly BarberContext _dbContext;

        public ActivitiesController(BarberContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Activity> Get()
        {
            return _dbContext.Activities;
        }

        // GET api/values/5
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var activity = _dbContext.Activities.FirstOrDefault(a => a.Id == id);
            if (activity == null)
            {
                return new HttpNotFoundResult();
            }
            else {
                return new ObjectResult(activity);
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Activity activity)
        {
            if (_dbContext.Activities.Any(a => a.EmployeeId == activity.EmployeeId && a.Date == activity.Date))
            {
                Response.StatusCode = (int) HttpStatusCode.BadRequest;
                return new JsonResult(new { StatusCode = "101" });
            }
            //if (activity.Id == 0)
            //{
                _dbContext.Activities.Add(activity);
                _dbContext.SaveChanges();
                return new ObjectResult(activity);
            //}
            //else
            //{
            //  var original = _dbContext.Activities.FirstOrDefault(m => m.Id == activity.Id);
            //  original.EmployeeId = activity.EmployeeId;
            //  original.Date = activity.Date;
            //  original.Client = activity.Client;
            //  original.Title = activity.Title;
            //  
            //  _dbContext.SaveChanges();
            //  return new ObjectResult(original);
            //}
        }

        // PUT api/values/5
        [HttpPut]
        public IActionResult Put([FromBody]Activity activity)
        {
            var original = _dbContext.Activities.FirstOrDefault(m => m.Id == activity.Id);
            original.EmployeeId = activity.EmployeeId;
            original.Date = activity.Date;
            original.Client = activity.Client;
            original.Title = activity.Title;

            _dbContext.SaveChanges();
            return new ObjectResult(original);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var activity = _dbContext.Activities.FirstOrDefault(m => m.Id == id);
            _dbContext.Activities.Remove(activity);
            _dbContext.SaveChanges();
            return new HttpStatusCodeResult(200);
        }
    }
}
