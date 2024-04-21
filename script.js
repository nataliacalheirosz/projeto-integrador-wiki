document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
            
    const searchTerm = document.getElementById("searchTerm").value.trim();
            
    if (searchTerm.toLowerCase() === "sistemas operacionais") {
        window.location.href = "sistemas_operacionais.html";
    } else if (searchTerm.toLowerCase() === "arquitetura de computadores") {
        window.location.href = "arquitetura.html";
    } else {
        // Redirecionar para a página de resultados ou mostrar uma mensagem de erro
        // window.location.href = "results.html?search=" + encodeURIComponent(searchTerm);
        alert("Página não encontrada para o termo de pesquisa fornecido.");
    }
});