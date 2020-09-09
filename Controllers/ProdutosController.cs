using System;
using Microsoft.AspNetCore.Mvc;
using sonmarket.DTO;

namespace sonmarket.Controllers
{
    public class ProdutosController : Controller
    {
        [HttpPost]
        public IActionResult Salvar(ProdutoDTO produtoTemporario)
        {
            return Content("Oi");
        }
    }
}
