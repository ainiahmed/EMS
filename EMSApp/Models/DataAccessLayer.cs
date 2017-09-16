using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace EMSApp.Models
{
    public static class DataAccessLayer
    {
        public static List<EmployeeModel> InitializeEmployeeData()
        {
            List<EmployeeModel> empList = new List<EmployeeModel>
            {
                new EmployeeModel{ Id= 1, EmployeeName= "Emmy Jems", Gender= "Female", Designation= "Director", Salary= "40000", Photo= "", IdentificatonDoc= "" },
                new EmployeeModel { Id= 2, EmployeeName= "Jimmy Kiker", Gender= "Male", Designation= "CEO", Salary= "50000", Photo= "", IdentificatonDoc="" },
                new EmployeeModel { Id= 3, EmployeeName= "Steven", Gender= "Male", Designation= "IT Manager", Salary= "20000", Photo= "", IdentificatonDoc="" },
                new EmployeeModel { Id= 4, EmployeeName= "Mirinda", Gender= "Female", Designation= "Team Lead", Salary= "20000", Photo= "", IdentificatonDoc="" },
                new EmployeeModel { Id= 5, EmployeeName= "Jerry", Gender= "Male", Designation= "Sales Head", Salary= "20000", Photo= "", IdentificatonDoc="" },
                new EmployeeModel { Id= 6, EmployeeName= "Samantha", Gender= "Female", Designation= "HR Manager", Salary= "20000", Photo= "", IdentificatonDoc="" },
                new EmployeeModel { Id= 7, EmployeeName= "Natasha", Gender= "Female", Designation= "DBA", Salary= "20000", Photo= "", IdentificatonDoc=""  },
                new EmployeeModel { Id= 8, EmployeeName= "Adver", Gender= "Male", Designation= "Software Engineer", Salary= "20000", Photo= "", IdentificatonDoc="" },
                new EmployeeModel { Id= 9, EmployeeName= "Rose", Gender= "Male", Designation= "System Analyst", Salary= "30000", Photo= "", IdentificatonDoc="" },
                new EmployeeModel { Id= 10, EmployeeName= "Chandler", Gender= "Male", Designation= "System Architect", Salary= "30000", Photo= "", IdentificatonDoc="" }
            };
            return empList;
        }

        public static List<EmployeeModel> ReadWriteDataFromTextFile(List<EmployeeModel> empList, bool write)
        {
            List<EmployeeModel> empL = new List<EmployeeModel>();
            var filePath = HttpContext.Current.Server.MapPath("~/App_Data/EmployeeData.txt");
            if (write)
            {
                using (TextWriter textWriter = new StreamWriter(filePath))
                {
                    foreach (var emp in empList)
                    {
                        textWriter.WriteLine($"Id={emp.Id},EmployeeName={emp.EmployeeName},Gender={emp.Gender}," +
                            $"Designation={emp.Designation},Salary={emp.Salary},Photo={emp.Photo},IdentificatonDoc={emp.IdentificatonDoc}");
                    }
                }
            }
            else
            {
                #region ReadFromFile
                using (TextReader textReader = new StreamReader(filePath))
                {
                    string readLine;
                    while ((readLine = textReader.ReadLine()) != null)
                    {
                        string[] strComma = readLine.Split(',');
                        EmployeeModel emp = new EmployeeModel();
                        for (int i = 0; i < strComma.Length; i++)
                        {
                            switch (i)
                            {
                                case 0:
                                    emp.Id = Convert.ToInt32(strComma[i].Split('=')[1]);
                                    break;

                                case 1:
                                    emp.EmployeeName = strComma[i].Split('=')[1];
                                    break;

                                case 2:
                                    emp.Gender = strComma[i].Split('=')[1];
                                    break;

                                case 3:
                                    emp.Designation = strComma[i].Split('=')[1];
                                    break;

                                case 4:
                                    emp.Salary = strComma[i].Split('=')[1];
                                    break;

                                case 5:
                                    emp.Photo = strComma[i].Split('=')[1];
                                    break;

                                case 6:
                                    emp.IdentificatonDoc = strComma[i].Split('=')[1];
                                    break;
                            }
                        }
                        empL.Add(emp);
                    }
                }
                #endregion
            }
            return empL;
        }
   }
}