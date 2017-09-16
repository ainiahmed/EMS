using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EMSApp.Models;
using System.Web;

namespace EMSApp.Controllers
{
    public class EmployeeController : ApiController
    {
        public HttpResponseMessage Get()
        {
            List<EmployeeModel> empList = new List<EmployeeModel>();
            empList = DataAccessLayer.ReadWriteDataFromTextFile(empList, false);
            if (empList == null)
                empList = DataAccessLayer.InitializeEmployeeData();
            return Request.CreateResponse(HttpStatusCode.OK, empList);
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            List<EmployeeModel> empList = DataAccessLayer.ReadWriteDataFromTextFile(null, false);
            EmployeeModel emp = empList.Find(x => x.Id == id);
            if (emp != null)
            {
                return Ok(emp);
            }
            else
            {
                return NotFound();
            }
        }
        
        [HttpPost]
        public IHttpActionResult CreateEmployee()
        {
            try
            {
                /****File Upload*/
                string fileName = "";
                var httpRequest = HttpContext.Current.Request;
                if (httpRequest.Files.Count > 0)
                {
                    var docfiles = new List<string>();
                    foreach (string file in httpRequest.Files)
                    {
                        var postedFile = httpRequest.Files[file];

                        fileName = Guid.NewGuid().ToString() + "-" + postedFile.FileName;
                        var filePath = HttpContext.Current.Server.MapPath("~/Upload/" + fileName);
                        postedFile.SaveAs(filePath);

                        docfiles.Add(filePath);
                    }
                }
                /****File Uploaded End*/
                EmployeeModel employee = new EmployeeModel();
                employee.EmployeeName = httpRequest.Form.Get("EmployeeName");
                employee.Designation = httpRequest.Form.Get("Designation");
                employee.Gender = httpRequest.Form.Get("Gender");
                employee.Salary = httpRequest.Form.Get("Salary");
                employee.Photo = fileName;
                                
                List<EmployeeModel> empList = DataAccessLayer.ReadWriteDataFromTextFile(null, false);
                Random r = new Random();
                int id = r.Next();
                empList.Add(new EmployeeModel
                {
                    Id = id,
                    EmployeeName = employee.EmployeeName,
                    Gender = employee.Gender,
                    Designation = employee.Designation,
                    Salary = employee.Salary.ToString(),
                    Photo = employee.Photo,
                    IdentificatonDoc = ""
                });
                DataAccessLayer.ReadWriteDataFromTextFile(empList, true);
                return Created(new Uri(Request.RequestUri + employee.Id.ToString()), empList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<controller>/5
        [HttpPut]
        public IHttpActionResult Put(EmployeeModel employee)
        {
            try
            {
                int id = employee.Id;
                List<EmployeeModel> empList = DataAccessLayer.ReadWriteDataFromTextFile(null, false);
                EmployeeModel emp = empList.Find(x => x.Id == id);
                if (emp != null)
                {
                    empList.Remove(emp);
                    emp.Id = id;
                    emp.EmployeeName = employee.EmployeeName;
                    emp.Designation = employee.Designation;
                    emp.Gender = employee.Gender;
                    emp.Salary = employee.Salary;
                    emp.Photo = employee.Photo;
                    empList.Add(emp);
                    DataAccessLayer.ReadWriteDataFromTextFile(empList, true);
                    return Ok(emp);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            List<EmployeeModel> empList = DataAccessLayer.ReadWriteDataFromTextFile(null, false);
            EmployeeModel emp = empList.Find(x => x.Id == id);
            if (emp != null)
            {
                empList.Remove(emp);
                DataAccessLayer.ReadWriteDataFromTextFile(empList, true);
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Employee with Id: " + id + " does not exist");
            }
        }
    }
}
