// ==========================
// LOGIN SIMPLES
// ==========================
const loginForm = document.getElementById("login-form");
const loginScreen = document.getElementById("login-screen");
const mainContent = document.getElementById("main-content");
const alunosPage = document.getElementById("alunos-page");
const loginMessage = document.getElementById("login-message");
const logoutButton = document.getElementById("logout-button");
const menuAlunos = document.getElementById("menu-alunos");
const voltarHome = document.getElementById("voltar-home");

// Usuário e senha fixos para demonstração
const usuarioValido = "admin";
const senhaValida = "1234";

// Impede o formulário de recarregar a página
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (usuario === usuarioValido && senha === senhaValida) {
        loginMessage.textContent = "";
        loginScreen.style.display = "none";
        mainContent.classList.remove("hidden-content");
    } else {
        loginMessage.textContent = "Usuário ou senha incorretos!";
    }
});

// ==========================
// BOTÃO SAIR (LOGOUT)
// ==========================
logoutButton.addEventListener("click", function () {
    mainContent.classList.add("hidden-content");
    alunosPage.classList.add("hidden-content");
    loginScreen.style.display = "flex"; // volta à tela de login
    loginForm.reset();
});

// ==========================
// ACESSAR PÁGINA DE ALUNOS
// ==========================
menuAlunos.addEventListener("click", function (e) {
    e.preventDefault();
    mainContent.classList.add("hidden-content");
    alunosPage.classList.remove("hidden-content");
});

// ==========================
// VOLTAR À HOME
// ==========================
voltarHome.addEventListener("click", function () {
    alunosPage.classList.add("hidden-content");
    mainContent.classList.remove("hidden-content");
});

// ==========================
// ESTILIZAÇÃO INICIAL
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    // Esconde conteúdo principal e página de alunos ao carregar
    mainContent.classList.add("hidden-content");
    alunosPage.classList.add("hidden-content");
    loginScreen.style.display = "flex";
});
