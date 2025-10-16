// script.js

// 1. Seleciona elementos do DOM (Login e Conteúdo Principal)
const tituloPrincipal = document.querySelector('.titulo_site');
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const loginMessage = document.getElementById('login-message');

// --- Função de Saudação (Modificada para ser chamada após o login) ---
function saudarVisitante(username) {
    if (tituloPrincipal) {
        tituloPrincipal.textContent = `Seja Bem-vindo(a), ${username}!`;
    }
}

// --- Lógica Principal de Login ---
if (loginForm && loginScreen && mainContent) {
    
    // Adiciona o ouvinte de evento para o envio do formulário
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede que o formulário recarregue a página
        
        // Pega os valores dos campos
        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();
        
        // **Credenciais de Teste:**
        const USER_CORRETO = "Mozer";
        const SENHA_CORRETA = "12345";
        
        // Simulação de verificação
        if (usernameInput === USER_CORRETO && passwordInput === SENHA_CORRETA) {
            
            // Login Bem-Sucedido
            
            // 1. Esconde a tela de login
            loginScreen.style.display = 'none'; 
            
            // 2. Mostra o conteúdo principal (seu modelo de página)
            mainContent.classList.remove('hidden-content'); 
            
            // 3. Executa a saudação personalizada no título da página
            saudarVisitante(usernameInput);
            
        } else {
            // Login Falhou
            // NOVIDADE: Mensagem de erro que informa a senha correta
            loginMessage.textContent = "Usuário ou senha incorretos.";
        }
    });
    
} else {
    // Caso algum ID esteja faltando no HTML (para segurança)
    console.error("Erro: Um ou mais IDs de login ou conteúdo principal não foram encontrados.");
}