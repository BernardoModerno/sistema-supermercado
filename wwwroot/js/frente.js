var enderecoProduto = "https://localhost:5001/Produtos/Produto/1"


$("#pesquisar").click(function() {
    $.post(enderecoProduto, function(dados, status){
        alert("Dados: " + dados + " Status: " + status);
    });
});
