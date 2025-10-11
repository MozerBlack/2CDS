// script.js

// 1. Seleciona elementos do DOM
const tituloPrincipal = document.querySelector('.titulo_site');
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const loginMessage = document.getElementById('login-message');

// --- Função de Saudação (Mantida e reutilizada) ---
function saudarVisitante(username) {
    // Altera o conteúdo de texto para uma saudação personalizada
    tituloPrincipal.textContent = `Seja Bem-vindo(a), ${username}!`;
}

// --- Função de Login (Nova Lógica) ---
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();
        
        // **IMPORTANTE: Esta é uma validação SIMPLES APENAS para demonstração.**
        // Em um projeto real, a senha e o usuário seriam verificados em um servidor.
        const USER_CORRETO = "aluno";
        const SENHA_CORRETA = "12345";
        
        if (usernameInput === USER_CORRETO && passwordInput === SENHA_CORRETA) {
            
            // Login Bem-Sucedido
            loginScreen.style.display = 'none'; // Esconde a tela de login
            mainContent.classList.remove('hidden-content'); // Mostra o conteúdo principal
            
            // Executa a saudação com o nome de usuário fornecido
            saudarVisitante(usernameInput);
            
        } else {
            // Login Falhou
            loginMessage.textContent = "Usuário ou senha incorretos. Tente 'aluno' e '12345'.";
        }
    });
} else {
    // Se o formulário não for encontrado, assume que está logado e exibe o conteúdo
    if (mainContent) {
        mainContent.classList.remove('hidden-content');
    }
    // E executa a saudação padrão se for a Home sem login
    if (tituloPrincipal) {
        tituloPrincipal.textContent = "Nossa Escola";
    }
}