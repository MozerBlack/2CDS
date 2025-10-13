// script.js


// A função 'defer' no HTML garante que este código só rode DEPOIS que a página HTML estiver pronta.


// 1. Seleciona o elemento que queremos modificar (o título principal)
const tituloPrincipal = document.querySelector('.titulo_site');


// 2. Função para saudar o visitante
function saudarVisitante() {
    // Pede o nome do usuário assim que a página carrega
    const nomeUsuario = prompt("Olá! Por favor, digite seu nome para uma experiência personalizada:");
   
    // Verifica se o elemento foi encontrado E se o usuário digitou um nome
    if (tituloPrincipal && nomeUsuario && nomeUsuario.trim() !== '') {
        // Altera o conteúdo de texto para uma saudação personalizada
        tituloPrincipal.textContent = `Seja Bem-vindo(a), ${nomeUsuario.trim()}!`;
    } else if (tituloPrincipal) {
        // Se o usuário clicou em Cancelar ou não digitou nada
        tituloPrincipal.textContent = "Seja Bem-vindo(a) à Nossa Escola!";
    }
}


// 3. Executa a função de saudação
// Usa o setTimeout para dar um pequeno atraso, dando tempo para a página carregar
setTimeout(saudarVisitante, 500); // 500ms (meio segundo)