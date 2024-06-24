$(document).ready(function() {
    const carrinho = [];
    
    function adicionarAoCarrinho(ProductId, ProductName) {
        carrinho.push(ProductId);
        console.log(`Prato ${ProductId} adicionado ao carrinho:`, carrinho);
        alert(`Prato "${ProductName}" adicionado.`);
    }

    $('.adicionar').on('click', function() {
        const ProductId = $(this).data('id-produto');
        const ProductName = $(this).data('product-name');
        adicionarAoCarrinho(ProductId, ProductName);
    });
});