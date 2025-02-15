
let listaDosAmigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();

    // Validar se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array
    listaDosAmigos.push(nome);
    
    // Atualizar a lista na interface
    atualizarListaAmigos();

    // Limpar o campo de entrada
    inputAmigo.value = "";
}

