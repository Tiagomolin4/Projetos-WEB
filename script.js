document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Pega os valores dos campos de login
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica se o login é válido
    if (username === "Usuario" && password === "Senha") {
        // Redireciona para a página protegida
        window.location.href = "pagina_protegida.html";
    } else {
        // Exibe mensagem de erro
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Usuário ou senha incorretos!";
        errorMessage.style.display = "block";
    }
});
