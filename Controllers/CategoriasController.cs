using System;
using Microsoft.AspNetCore.Mvc;
using sonmarket.DTO;

namespace sonmarket.Controllers
{
    public class CategoriasController : Controller
    {
        [HttpPost]
        public IActionResult Salvar(CategoriaDTO categoriaTemporaria)
        {
            return Content("Oi");
        }
    }
}
