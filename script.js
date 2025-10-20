// script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona elementos do DOM
    const tituloPrincipal = document.querySelector('.titulo_site');
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    const loginMessage = document.getElementById('login-message');
    const logoutButton = document.getElementById('logout-button'); 
    const menuAlunosLink = document.getElementById('menu-alunos');
    const alunosPage = document.getElementById('alunos-page');
    const voltarHomeButton = document.getElementById('voltar-home');
    
    // Credenciais de Teste
    const USER_CORRETO = "Mozer";
    const SENHA_CORRETA = "12345";
    
    // --- Função para mostrar a Tela de Login ---
    function mostrarTelaLogin() {
        loginScreen.classList.remove('hidden-content');
        loginScreen.style.display = 'flex'; // Garante que a tela de login seja centralizada pelo CSS
        mainContent.classList.add('hidden-content');
        alunosPage.classList.add('hidden-content');
        // Opcional: Limpar campos de login
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        loginMessage.textContent = '';
        // Resetar o título após o logout
        if (tituloPrincipal) {
             tituloPrincipal.textContent = 'Nossa Escola';
        }
    }

    // --- Função para mostrar a Home ---
    function mostrarHome(username) {
        loginScreen.style.display = 'none'; // Esconde o container do login
        mainContent.classList.remove('hidden-content'); 
        alunosPage.classList.add('hidden-content'); 
        
        // Atualiza o título
        if (tituloPrincipal) {
            tituloPrincipal.textContent = `Seja Bem-vindo(a), ${username}!`;
        }
    }

    // --- Função para mostrar a Tela de Alunos ---
    function mostrarTelaAlunos(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        mainContent.classList.add('hidden-content');
        alunosPage.classList.remove('hidden-content');
    }

    // --- Função para voltar para a Home ---
    function voltarParaHome(event) {
        event.preventDefault(); // Impede o comportamento padrão do botão
        alunosPage.classList.add('hidden-content');
        mainContent.classList.remove('hidden-content');
    }


    // ----------------------------------------
    // Lógica Principal de Login
    // ----------------------------------------
    if (loginForm) {
        // Garante que a tela de login seja a única visível ao carregar
        mostrarTelaLogin(); 
        
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const usernameInput = document.getElementById('username').value.trim();
            const passwordInput = document.getElementById('password').value.trim();
            
            if (usernameInput === USER_CORRETO && passwordInput === SENHA_CORRETA) {
                
                loginMessage.textContent = "Login bem-sucedido!";
                loginMessage.style.color = 'green';
                
                // Exibe a Home após um pequeno atraso para a mensagem
                setTimeout(() => {
                    mostrarHome(usernameInput);
                }, 500); 
                
            } else {
                // Login Falhou
                loginMessage.textContent = "Usuário ou senha incorreto.";
                loginMessage.style.color = 'red';
            }
        });
    }

    // ----------------------------------------
    // Lógica de Navegação
    // ----------------------------------------

    // Logout
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            mostrarTelaLogin(); // Volta para a tela de login
        });
    }

    // Ir para Alunos
    if (menuAlunosLink) {
        menuAlunosLink.addEventListener('click', mostrarTelaAlunos);
    }

    // Voltar para Home
    if (voltarHomeButton) {
        voltarHomeButton.addEventListener('click', voltarParaHome);
    }

    // Opcional: Adiciona tratamento de erro
    if (!loginForm || !mainContent || !alunosPage) {
        console.error("Erro: Um ou mais elementos essenciais do DOM não foram encontrados. Verifique os IDs.");
    }
});