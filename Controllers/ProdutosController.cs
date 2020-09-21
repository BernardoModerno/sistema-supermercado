using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sonmarket.Data;
using sonmarket.DTO;
using sonmarket.Models;

namespace sonmarket.Controllers {
    public class ProdutosController : Controller {
        private readonly ApplicationDbContext database;
        public ProdutosController (ApplicationDbContext database) {
            this.database = database;
        }

        [HttpPost]
        public IActionResult Salvar (ProdutoDTO produtoTemporario) {
            if (ModelState.IsValid) {
                Produto produto = new Produto ();
                produto.Nome = produtoTemporario.Nome;
                produto.Categoria = database.Categorias.First (categoria => categoria.Id == produtoTemporario.CategoriaID);
                produto.Fornecedor = database.Fornecedores.First (fornecedor => fornecedor.Id == produtoTemporario.FornecedorID);
                produto.PrecoDeCusto = produtoTemporario.PrecoDeCusto;
                produto.PrecoDeVenda = produtoTemporario.PrecoDeVenda;
                produto.Medicao = produtoTemporario.Medicao;
                produto.Status = true;
                database.Produtos.Add (produto);
                database.SaveChanges ();
                return RedirectToAction ("Produtos", "Gestao");
            } else {
                ViewBag.Categorias = database.Categorias.ToList (); /*Se der errado retorna a lista de fornecedores e categorias para o formulário*/
                ViewBag.Fornecedores = database.Fornecedores.ToList ();
                return View ("../Gestao/NovoProduto");
            }
        }

        [HttpPost]
        public IActionResult Atualizar (ProdutoDTO produtoTemporario) {
            if (ModelState.IsValid) {
                var produto = database.Produtos.First (prod => prod.Id == produtoTemporario.Id);
                produto.Nome = produtoTemporario.Nome;
                produto.Categoria = database.Categorias.First (categoria => categoria.Id == produtoTemporario.CategoriaID);
                produto.Fornecedor = database.Fornecedores.First (fornecedor => fornecedor.Id == produtoTemporario.FornecedorID);
                produto.PrecoDeCusto = produtoTemporario.PrecoDeCusto;
                produto.PrecoDeVenda = produtoTemporario.PrecoDeVenda;
                produto.Medicao = produtoTemporario.Medicao;
                database.SaveChanges ();
                return RedirectToAction ("Produtos", "Gestao");
            } else {
                return RedirectToAction ("Produtos", "Gestao");
            }
        }
        public IActionResult Deletar (int id) {
            if (id > 0) {
                var produto = database.Produtos.First (prod => prod.Id == id);
                produto.Status = false;
                database.SaveChanges ();
            }
            return RedirectToAction ("Produtos", "Gestao");
        }
        [HttpPost]
        public IActionResult Produto(int id)
        {
            if(id > 0)
            {
                var produto = database.Produtos.Where(p => p.Status == true).Include(p => p.Categoria).Include(p => p.Fornecedor).First(p => p.Id == id);
                if(produto != null)
                {
                    Response.StatusCode = 200;
                    return Json(produto);
                }else
                {
                    Response.StatusCode = 404;
                    return Json(null);
                }
            }else
            {
                Response.StatusCode = 404;
                return Json(null);
            }
            
        }

    }
}
