# Desafio - Amigo Secreto 🎁

Este projeto faz parte da **Formação Oracle Next Education** para **Data Science**. Foi o meu primeiro contato com a linguagem **JavaScript**, onde aprendi conceitos fundamentais, como manipulação do DOM, eventos e lógica de programação.

## 🚀 Sobre o Desafio

O desafio consiste em criar uma aplicação interativa para adicionar nomes de amigos a uma lista e sortear aleatoriamente um deles.

## 📌 Funcionalidades Implementadas

1. **Adicionar amigos:**
   - Captura do nome digitado pelo usuário.
   - Validação para evitar entrada vazia.
   - Armazena os amigos em um array e os exibe na tela.

2. **Atualizar lista de amigos:**
   - Percorre o array de amigos e adiciona cada nome como um elemento `<li>` dentro da lista HTML.
   - Garante que a lista não tenha duplicatas ao usar `innerHTML = ""` antes de atualizar.

3. **Sortear amigo secreto:**
   - Verifica se há amigos disponíveis antes do sorteio.
   - Usa `Math.random()` e `Math.floor()` para selecionar um índice aleatório do array.
   - Exibe o nome sorteado na tela.
   - Limpa a lista após o sorteio.

## 🛠️ Tecnologias Utilizadas

- **HTML** para estruturação da página.
- **CSS** para estilização (não incluído aqui, mas presente no projeto).
- **JavaScript** para manipulação da interface e lógica do sorteio.

## 📥 Como Obter o Código

Você pode baixar o código ou cloná-lo via GitHub:
```bash
  git clone https://github.com/seu-usuario/seu-repositorio.git
```

## 📢 Contribuição

Se tiver sugestões para melhorias ou encontrar algum bug, fique à vontade para abrir uma _issue_ ou enviar um _pull request_.

## 📜 Licença

Este projeto é de livre uso para aprendizado.

---

✨ Desenvolvido como parte da **Formação Oracle Next Education** ✨