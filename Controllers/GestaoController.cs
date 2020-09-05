using System;
using Microsoft.AspNetCore.Mvc;

namespace sonmarket.Controllers
{
    public class GestaoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
