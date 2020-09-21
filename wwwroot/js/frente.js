var enderecoProduto = "https://localhost:5001/Produtos/Produto/"
var produto;

$("#pesquisar").click(function() {
    var codProduto = $("#codProduto").val();
    var enderecoTemporario = enderecoProduto+codProduto;
    $.post(enderecoTemporario, function(dados, status){
        
            produto = dados;
        
    }).fail(function(){
        alert("Produto inválido");
    });
});
