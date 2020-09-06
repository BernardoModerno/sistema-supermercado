using System.ComponentModel.DataAnnotations;

namespace sonmarket.DTO
{
    public class CategoriaDTO
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage="Nome de Categoria é Obrigatório")]
        [StringLength(100,ErrorMessage="Nome de Categoria muito grande, Tente um nome menor")]
        [MinLength(2, ErrorMessage = "Nome de Categoria muito pequena, Tente um nome com mais de dois caracteres")]
        public string Nome { get; set; }
    }
}
