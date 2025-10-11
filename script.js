// script.js

// 1. Seleciona os elementos principais pelo ID
const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');

// Verifica se todos os elementos existem antes de adicionar eventos
if (openMenuBtn && closeMenuBtn && sideMenu && overlay) {
    
    // ----------------------------------------
    // FUNÇÃO PARA ABRIR O MENU
    // ----------------------------------------
    openMenuBtn.addEventListener('click', function() {
        // 1. Adiciona a classe 'is-open' para deslizar o menu (controlado pelo CSS)
        sideMenu.classList.add('is-open');
        // 2. Remove a classe 'hidden' para mostrar o overlay (sombra de fundo)
        overlay.classList.remove('hidden');
        // 3. Remove o atributo aria-hidden para acessibilidade
        sideMenu.setAttribute('aria-hidden', 'false');
        // 4. Garante que o corpo da página não role quando o menu estiver aberto
        document.body.style.overflow = 'hidden';
    });

    // ----------------------------------------
    // FUNÇÃO PARA FECHAR O MENU (Reaproveitada)
    // ----------------------------------------
    function closeSideMenu() {
        // 1. Remove a classe 'is-open' para deslizar o menu de volta para fora
        sideMenu.classList.remove('is-open');
        // 2. Adiciona a classe 'hidden' para esconder o overlay
        overlay.classList.add('hidden');
        // 3. Adiciona o atributo aria-hidden de volta
        sideMenu.setAttribute('aria-hidden', 'true');
        // 4. Permite que o corpo da página volte a rolar
        document.body.style.overflow = 'auto';
    }

    // ----------------------------------------
    // EVENT LISTENERS PARA FECHAMENTO
    // ----------------------------------------
    
    // Fechar ao clicar no botão 'X'
    closeMenuBtn.addEventListener('click', closeSideMenu);

    // Fechar ao clicar no overlay (fundo escuro)
    overlay.addEventListener('click', closeSideMenu);

    // Fechar ao apertar a tecla ESC (Melhora a acessibilidade)
    document.addEventListener('keydown', function(event) {
        // Verifica se a tecla pressionada é a 'Escape' e se o menu está aberto
        if (event.key === 'Escape' && sideMenu.classList.contains('is-open')) {
            closeSideMenu();
        }
    });

} else {
    console.error("Erro: Um ou mais elementos do menu lateral não foram encontrados no HTML. Verifique os IDs.");
}