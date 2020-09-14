using System.ComponentModel.DataAnnotations;

namespace sonmarket.DTO
{
    public class PromocaoDTO
    {
        [Required]
        public int Id { get; set; }
        [StringLength(100, ErrorMessage = "Nome deve ser menor que 100 caracteres")]
        [MinLength(3, ErrorMessage = "O nome é muito curto")]
        public string Nome { get; set; }
        [Required]
        public int ProdutoID { get; set; }
        [Required]
        [Range(0, 100)]
        public float Porcentagem { get; set; }
    }
}
