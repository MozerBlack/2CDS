// script.js

// 1. Seleciona o botão e o elemento de navegação (pelos IDs do HTML atualizado)
const botaoMenu = document.getElementById('menuBotao');
const menuNav = document.getElementById('menuNavegacao');

// 2. Adiciona um "Ouvinte de Evento" para detectar o clique no botão
if (botaoMenu && menuNav) {
    botaoMenu.addEventListener('click', function() {
        
        // 3. O coração do JS: toggle (liga/desliga) a classe 'menu-ativo'
        // Se a classe existe, remove (esconde). Se não existe, adiciona (mostra).
        menuNav.classList.toggle('menu-ativo');
        
        // 4. Opcional: Altera o ícone do botão de ☰ (menu) para X (fechar)
        if (menuNav.classList.contains('menu-ativo')) {
            botaoMenu.innerHTML = '&#10005;'; // X
        } else {
            botaoMenu.innerHTML = '&#9776;'; // ☰
        }
    });
} else {
    console.error("Erro: Elementos do menu não encontrados no HTML. Verifique os IDs 'menuBotao' e 'menuNavegacao'.");
}
