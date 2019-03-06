using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreBackend.Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreBackend.Controllers
{
    [Route("api/asiakkaat")]
    [ApiController]
    public class AsiakkaatApiController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public List<Customers> Listaus()
        {
            NorthwindContext context = new NorthwindContext();
            List<Customers> allCustomers = context.Customers.ToList();

            return allCustomers;
        }

        [HttpGet]
        [Route("{asiakasId}")]
        public Customers Yksittäinen(string asiakasId)
        {
            NorthwindContext context = new NorthwindContext();
            Customers asiakas = context.Customers.Find(asiakasId);

            // LINQ
            //Customers asiakas2 = (from c in context.Customers
            //                      where c.CustomerId == asiakasId
            //                      select c).FirstOrDefault();

            return asiakas;
        }

        [HttpPost]
        [Route("")]
        public bool Luonti([FromBody] Customers uusi)
        {
            NorthwindContext context = new NorthwindContext();
            context.Customers.Add(uusi);
            context.SaveChanges();

            return true;
        }

        [HttpPut]
        [Route("{asiakasId}")]
        public Customers Muokkaus(string asiakasId, [FromBody] Customers muutokset)
        {
            NorthwindContext context = new NorthwindContext();
            Customers asiakas = context.Customers.Find(asiakasId);

            // löytyikö asiakas annetulla id:llä?
            if (asiakas == null)
            {
                return null;
            }

            // muokkaus
            asiakas.CompanyName = muutokset.CompanyName;
            asiakas.ContactName = muutokset.ContactName;
            asiakas.ContactTitle = muutokset.ContactTitle;
            asiakas.City = muutokset.City;
            asiakas.Country = muutokset.Country;
            asiakas.Phone = muutokset.Phone;
            asiakas.Fax = muutokset.Fax;

            context.SaveChanges();

            return asiakas;
        }
    }
}