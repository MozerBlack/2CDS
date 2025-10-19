// script.js

// 1. Seleciona elementos do DOM (Login e Conteúdo Principal)
const tituloPrincipal = document.querySelector('.titulo_site');
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const loginMessage = document.getElementById('login-message');
const logoutButton = document.getElementById('logout-button'); // NOVO: Botão Sair

// --- Função de Saudação ---
function saudarVisitante(username) {
    if (tituloPrincipal) {
        tituloPrincipal.textContent = `Seja Bem-vindo(a), ${username}!`;
    }
}

// --- Lógica Principal de Login ---
if (loginForm && loginScreen && mainContent) {
    
    // Adiciona o ouvinte de evento para o envio do formulário
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        // Pega os valores dos campos
        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();
        
        // **Credenciais de Teste:**
        const USER_CORRETO = "Mozer";
        const SENHA_CORRETA = "12345";
        
        // Simulação de verificação
        if (usernameInput === USER_CORRETO && passwordInput === SENHA_CORRETA) {
            
            // Login Bem-Sucedido
            loginScreen.style.display = 'none'; 
            mainContent.classList.remove('hidden-content'); 
            saudarVisitante(usernameInput);
            
        } else {
            // Login Falhou
            loginMessage.textContent = "Usuário ou senha incorreto.";
        }
    });
    
} else {
    console.error("Erro: Um ou mais IDs de login ou conteúdo principal não foram encontrados.");
}

// --- Lógica de Logout (Adicionada) ---
if (logoutButton) {
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede a navegação do link
        
        // Recarrega a página, voltando para a tela de login
        window.location.reload(); 
    });
}