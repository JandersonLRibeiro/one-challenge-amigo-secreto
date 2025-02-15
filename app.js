
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

function atualizarListaAmigos() {
    // Obter o elemento da lista
    let lista = document.getElementById("listaAmigos");
    
    // Limpar a lista antes de adicionar novos elementos
    lista.innerHTML = "";
    
    // Percorrer o array amigos e adicionar cada nome como um <li>
    for (let i = 0; i < listaDosAmigos.length; i++) {
        let li = document.createElement("li"); // Criar um novo elemento <li>
        li.textContent = listaDosAmigos[i]; // Definir o texto do <li> como o nome do amigo
        lista.appendChild(li); // Adicionar o <li> à lista
    }
}

function sortearAmigo() {
    // Validar se há amigos disponíveis
    if (listaDosAmigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }
    
    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * listaDosAmigos.length);
    
    // Obter o nome sorteado
    let amigoSorteado = listaDosAmigos[indiceSorteado];
    
    // Mostrar o resultado na página
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;

    // Limpar a lista de amigos após o sorteio
    listaDosAmigos = [];
    atualizarListaAmigos();
}

