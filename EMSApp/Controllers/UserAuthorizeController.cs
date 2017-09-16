using EMSApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EMSApp.Controllers
{
    public class UserAuthorizeController : ApiController
    {
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        [HttpPost]
        public IHttpActionResult Post(UserModel model)
        {
            if (model != null)
            {
                if (model.UserName == "admin" && model.Password == "admin")
                {
                    return Ok(model.UserName);
                }
            }
            return Unauthorized();
        }
    }
}
