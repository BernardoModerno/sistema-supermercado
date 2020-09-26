/*declaração de variáveis*/ 
var enderecoProduto = "https://localhost:5001/Produtos/Produto/"
var produto;
var compra = [];
var __totalVenda__ = 0.0;

/* Inicio */

atualizarTotal();

/*Funções*/
function atualizarTotal() {
    $("#totalVenda").html(__totalVenda__);
}

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

    var venda = { produto: produtoTemp, quantidade: q, subtotal: produtoTemp.precoDeVenda * q };

    __totalVenda__ += venda.subtotal;

    atualizarTotal();

    compra.push(venda); /*Compra é a lista de produtos adicionado */

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

/* Finalização de venda */
$("#finalizarVendaBTN").click(function () {
    if (__totalVenda__ <= 0) {
        alert("Compra inválida, nenhum produto adicionado!");
        return;
    }
    var _valorPago = $("#valorPago").val();
    console.log(typeof _valorPago);
    if (!isNaN(_valorPago)) {
        _valorPago = parseFloat(_valorPago);
        if (_valorPago >= __totalVenda__) {
            console.log(_valorPago);

        } else {
            alert("Valor pago é muito baixo!");
            return;
        }
    } else {
        alert("Valor pago, inválido!");
        return;
    }
});
