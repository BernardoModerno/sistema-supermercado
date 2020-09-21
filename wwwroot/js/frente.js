/*declaração de variáveis*/ 
var enderecoProduto = "https://localhost:5001/Produtos/Produto/"
var produto;

/*Funções*/
function preencherFormulario(dadosProduto) {
    $("#campoNome").val(dadosProduto.nome);
    $("#campoCategoria").val(dadosProduto.categoria.nome);
    $("#campoFornecedor").val(dadosProduto.fornecedor.nome);
    $("#campoPreco").val(dadosProduto.precoDeVenda);
}

function zerarFormulario() {
    $("#campoNome").val("");
    $("#campoCategoria").val("");
    $("#campoFornecedor").val("");
    $("#campoPreco").val("");
    $("#campoQuantidade").val("");
}

$("#produtoForm").on("submit", function (event) {
    event.preventDefault();
    var produtoParaTabela = produto;
    var qtd = $("#campoQuantidade").val();

    console.log(produtoParaTabela);
    console.log(qtd);
    //var produto = undefined;
    zerarFormulario();
});


/*Ajax*/
$("#pesquisar").click(function() {
    var codProduto = $("#codProduto").val();
    var enderecoTemporario = enderecoProduto+codProduto;
    $.post(enderecoTemporario, function(dados, status){
        
            produto = dados;
            preencherFormulario(produto);
        
    }).fail(function(){
        alert("Produto inválido");
    });
});
