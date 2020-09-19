var enderecoProduto = "https://localhost:5001/Produtos/Produto/"


$("#pesquisar").click(function() {
    var codProduto = $("#codProduto").val();
    var enderecoTemporario = enderecoProduto+codProduto;
    $.post(enderecoTemporario, function(dados, status){
        alert("Dados: " + dados + " Status: " + status);
    });
});
