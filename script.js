// script.js

// 1. Seleciona elementos do DOM (Login e Conteúdo Principal)
const tituloPrincipal = document.querySelector('.titulo_site');
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const loginMessage = document.getElementById('login-message');
const logoutButton = document.getElementById('logout-button'); 
const menuPrincipal = document.querySelector('.menu-principal'); 
// REMOVIDO: const menuHomeLink = document.getElementById('menu-home');

// 2. Seletores da nova tela de alunos
const menuAlunosLink = document.getElementById('menu-alunos');
const alunosPage = document.getElementById('alunos-page');
const voltarHomeButton = document.getElementById('voltar-home');

// Credenciais de Exemplo
const VALID_USERNAME = 'Mozer';
const VALID_PASSWORD = '12345';

// --- Função de Saudação ---
function saudarVisitante(username) {
    if (tituloPrincipal) {
        tituloPrincipal.textContent = `Seja Bem-vindo(a), ${username}!`;
    }
}

// --- Função para mostrar a Tela Home (Conteúdo Principal) ---
function showHomePage(username) {
    // 1. Esconde a tela de login
    loginScreen.classList.add('hidden-content');
    
    // 2. Mostra o menu de navegação e o conteúdo principal
    menuPrincipal.classList.remove('hidden-content');
    mainContent.classList.remove('hidden-content');

    // 3. Garante que a tela de alunos esteja escondida
    alunosPage.classList.add('hidden-content');

    // 4. Personaliza a saudação no cabeçalho
    saudarVisitante(username);
}

// --- Função para mostrar a Tela de Login (Logout) ---
function showLoginPage() {
    // 1. Mostra a tela de login
    loginScreen.classList.remove('hidden-content');
    
    // 2. Esconde o menu e o conteúdo principal/alunos
    menuPrincipal.classList.add('hidden-content');
    mainContent.classList.add('hidden-content');
    alunosPage.classList.add('hidden-content');
    
    // 3. Limpa campos e mensagem de erro
    loginForm.reset();
    loginMessage.textContent = '';
    
    // 4. Volta o título ao padrão
    if (tituloPrincipal) {
        tituloPrincipal.textContent = 'Nossa Escola';
    }
}


// --- 3. Event Listener para o Formulário de Login ---
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === VALID_USERNAME && passwordInput === VALID_PASSWORD) {
        // Login bem-sucedido
        loginMessage.textContent = 'Login realizado com sucesso!';
        // Usa um pequeno delay para a mensagem ser visível antes de carregar o conteúdo
        setTimeout(() => {
            showHomePage(usernameInput);
        }, 500); 
    } else {
        // Login falhou
        loginMessage.textContent = 'Usuário ou senha incorreta.';
    }
});


// --- 4. Event Listener para o botão Sair (Logout) ---
logoutButton.addEventListener('click', (event) => {
    event.preventDefault();
    showLoginPage();
});


// --- 5. Lógica de Navegação entre Home e Alunos ---

// Link 'Alunos' no menu principal
menuAlunosLink.addEventListener('click', (event) => {
    event.preventDefault();
    mainContent.classList.add('hidden-content'); // Esconde Home
    alunosPage.classList.remove('hidden-content'); // Mostra Alunos
});

// REMOVIDO: A lógica do link 'Home' do menu principal foi removida.
// A Home agora só é acessada após o login, ou voltando da página de Alunos.

// Botão 'Voltar à Home' na página de alunos
voltarHomeButton.addEventListener('click', (event) => {
    event.preventDefault();
    alunosPage.classList.add('hidden-content'); // Esconde Alunos
    mainContent.classList.remove('hidden-content'); // Mostra Home
});

// --- Inicialização ---
// Inicia o site mostrando apenas a tela de login
document.addEventListener('DOMContentLoaded', () => {
    showLoginPage();
});