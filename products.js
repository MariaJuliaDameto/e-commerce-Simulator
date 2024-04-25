document.addEventListener("DOMContentLoaded", function() {
    // Obtém o ID do produto a partir da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Simula uma chamada assíncrona para obter os detalhes do produto
    setTimeout(function() {
        const productDetails = {
            name: "Produto " + productId,
            price: "R$ " + (productId === "1" ? "99,99" : "149,99"),
            description: "Descrição do Produto " + productId
        };
        
        // Preenche os detalhes do produto no HTML
        const productInfo = document.getElementById("product-info");
        productInfo.innerHTML = `
            <h3>${productDetails.name}</h3>
            <p>${productDetails.price}</p>
            <p>${productDetails.description}</p>
        `;
    }, 1000); // Simula um atraso de 1 segundo (1000 milissegundos)
});
