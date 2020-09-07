using System.ComponentModel.DataAnnotations;

namespace sonmarket.DTO
{
    public class FornecedorDTO
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "Nome de Fornecedor é Obrigatório")]
        [StringLength(100, ErrorMessage = "Nome de Fornecedor muito grande, Tente um nome menor")]
        [MinLength(2, ErrorMessage = "Nome de Fornecedor muito pequeno, Tente um nome com mais de dois caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "E-mail do Fornecedor é Obrigatório")]
        [EmailAddress(ErrorMessage="E-mail inválido!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Telefone do Fornecedor é Obrigatório")]
        [Phone(ErrorMessage = "Número de telefone inválido")]
        public string Telefone { get; set; }
    }
}
