// script.js

// 1. Seleciona elementos do DOM (Login e Conteúdo Principal)
const tituloPrincipal = document.querySelector('.titulo_site');
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const loginMessage = document.getElementById('login-message');
const logoutButton = document.getElementById('logout-button'); 
const menuPrincipal = document.querySelector('.menu-principal'); 

// 2. Seletores das telas secundárias
const menuAlunosLink = document.getElementById('menu-alunos');
const alunosPage = document.getElementById('alunos-page');
const voltarHomeButton = document.getElementById('voltar-home');

// NOVOS seletores para Configurações
const menuConfigLink = document.getElementById('menu-configuracoes');
const configuracoesPage = document.getElementById('configuracoes-page');
const voltarHomeConfigButton = document.getElementById('voltar-home-config');

// Credenciais de Exemplo
const VALID_USERNAME = 'Mozer';
const VALID_PASSWORD = '12345';

// --- Função utilitária para esconder todas as páginas de conteúdo ---
function hideAllPages() {
    mainContent.classList.add('hidden-content');
    alunosPage.classList.add('hidden-content');
    configuracoesPage.classList.add('hidden-content'); // Esconde Configurações
}

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
    
    // 2. Mostra o menu de navegação
    menuPrincipal.classList.remove('hidden-content');
    
    // 3. Garante que Home esteja visível e as outras escondidas
    hideAllPages();
    mainContent.classList.remove('hidden-content');

    // 4. Personaliza a saudação no cabeçalho
    saudarVisitante(username);
}

// --- Função para mostrar a Tela de Login (Logout) ---
function showLoginPage() {
    // 1. Mostra a tela de login
    loginScreen.classList.remove('hidden-content');
    
    // 2. Esconde o menu e todas as páginas de conteúdo
    menuPrincipal.classList.add('hidden-content');
    hideAllPages();
    
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
        setTimeout(() => {
            showHomePage(usernameInput);
        }, 500); 
    } else {
        // Login falhou
        loginMessage.textContent = 'Credenciais inválidas. Tente novamente.';
    }
});


// --- 4. Event Listener para o botão Sair (Logout) ---
logoutButton.addEventListener('click', (event) => {
    event.preventDefault();
    showLoginPage();
});


// --- 5. Lógica de Navegação entre Home, Alunos e Configurações ---

// Link 'Alunos'
menuAlunosLink.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllPages();
    alunosPage.classList.remove('hidden-content'); // Mostra Alunos
});

// Link 'Configurações'
menuConfigLink.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllPages();
    configuracoesPage.classList.remove('hidden-content'); // Mostra Configurações
});


// Botão 'Voltar à Home' na página de alunos
voltarHomeButton.addEventListener('click', (event) => {
    event.preventDefault();
    showHomePage(VALID_USERNAME); // Usa a função de mostrar Home
});

// Botão 'Voltar à Home' na página de configurações
voltarHomeConfigButton.addEventListener('click', (event) => {
    event.preventDefault();
    showHomePage(VALID_USERNAME); // Usa a função de mostrar Home
});


// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    showLoginPage();
});