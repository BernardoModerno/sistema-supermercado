/*declaração de variáveis*/ 
var enderecoProduto = "https://localhost:5001/Produtos/Produto/"
var produto;
var compra = [];

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
    adicionarNaTabela(produtoParaTabela, qtd);
    zerarFormulario();
});

function adicionarNaTabela(p,q) {

    var produtoTemp = {};

    Object.assign(produtoTemp, produto); /*Clonando objeto produto*/

    compra.push(produtoTemp); /*Compra é a lista de produtos adicionado */

    $("#compras").append(`<tr>
        <td>${p.id}</td>
        <td>${p.nome}</td>
        <td>${q}</td>
        <td>R$ ${p.precoDeVenda}</td>
        <td>${p.medicao}</td>
        <td>R$ ${p.precoDeVenda * q}</td>
        <td><button class='btn btn-danger'>Remover</button></td>
    </tr>`);
}


/*Ajax*/
$("#pesquisar").click(function() {
    var codProduto = $("#codProduto").val();
    var enderecoTemporario = enderecoProduto+codProduto;
    $.post(enderecoTemporario, function(dados, status){
        
            produto = dados;

            var med = "";

            switch (produto.medicao) {
                case 0:
                    med = "L";
                    break;
                case 1:
                    med = "K";
                    break;
                case 2:
                    med = "U";
                    break;
                default:
                    med = "U";
                    break;
            }

            produto.medicao = med;

            preencherFormulario(produto);
        
    }).fail(function(){
        alert("Produto inválido");
    });
});
