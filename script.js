// script.js

// 1. Seleciona elementos do DOM (Login e Conteúdo Principal)
const tituloPrincipal = document.querySelector('.titulo_site');
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const loginMessage = document.getElementById('login-message');
const logoutButton = document.getElementById('logout-button'); 
const menuPrincipal = document.querySelector('.menu-principal'); // Novo: para mostrar/esconder o menu

// 2. Seletores da nova tela de alunos
const menuAlunosLink = document.getElementById('menu-alunos');
const alunosPage = document.getElementById('alunos-page');
const voltarHomeButton = document.getElementById('voltar-home');

// --- Função de Saudação ---
function saudarVisitante(username) {
    if (tituloPrincipal) {
        tituloPrincipal.textContent = `Seja Bem-vindo(a), ${username}!`;
    }
}

// --- Função para mostrar a Tela de Alunos ---
function mostrarTelaAlunos() {
    // Esconde o conteúdo principal (Home) e o menu
    mainContent.classList.add('hidden-content');
    menuPrincipal.classList.add('hidden-content');
    
    // Mostra a nova tela de alunos
    alunosPage.classList.remove('hidden-content');
}

// --- Função para voltar para a Home ---
function voltarParaHome() {
    // Esconde a tela de alunos
    alunosPage.classList.add('hidden-content');
    
    // Mostra o conteúdo principal (Home) e o menu
    mainContent.classList.remove('hidden-content');
    menuPrincipal.classList.remove('hidden-content');
}

// --- Lógica Principal de Login ---
if (loginForm && loginScreen && mainContent && alunosPage && menuPrincipal) {
    
    // O menu e o conteúdo principal devem ser ocultados no início, mas o header e o nav devem ser visíveis
    // O hidden-content está no main-content e no alunos-page (ver HTML)
    
    // Adiciona o ouvinte de evento para o envio do formulário
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();
        
        // **Credenciais de Teste:**
        const USER_CORRETO = "Mozer";
        const SENHA_CORRETA = "12345";
        
        // Simulação de verificação
        if (usernameInput === USER_CORRETO && passwordInput === SENHA_CORRETA) {
            
            // Login Bem-Sucedido
            loginScreen.style.display = 'none'; 
            
            // Mostra o conteúdo principal (Home) e o menu
            mainContent.classList.remove('hidden-content'); 
            menuPrincipal.classList.remove('hidden-content');
            
            // Garante que a tela de alunos esteja escondida ao logar
            alunosPage.classList.add('hidden-content'); 

            saudarVisitante(usernameInput);
            
        } else {
            // Login Falhou
            loginMessage.textContent = "Usuário ou senha incorreto.";
        }
    });
    
} else {
    console.error("Erro: Um ou mais IDs de login ou conteúdo principal não foram encontrados.");
}

// --- Lógica de Logout ---
if (logoutButton) {
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Recarrega a página para voltar ao estado inicial de login
        window.location.reload(); 
    });
}


// --- Lógica de Alternância de Tela (Alunos) ---

if (menuAlunosLink) {
    menuAlunosLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        mostrarTelaAlunos();
    });
}

if (voltarHomeButton) {
    voltarHomeButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        voltarParaHome();
    });
}