using System;
using Microsoft.AspNetCore.Mvc;
using sonmarket.DTO;

namespace sonmarket.Controllers
{
    public class FornecedoresController : Controller
    {
        public IActionResult Salvar(FornecedorDTO fornecedorTemporario)
        {
            return Content("oi");
        }
    }
}
