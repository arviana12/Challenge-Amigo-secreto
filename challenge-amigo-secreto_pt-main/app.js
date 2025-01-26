// Array para armazenar os nomes dos amigos
let nomeAmigos = [];
// Seleciona o input e a lista de amigos
let inputNome = document.querySelector('#amigo');
let listaAmigos = document.querySelector('#listaAmigos');
// Função para adicionar um amigo ao array e à lista
// Função para adicionar um amigo ao array e à lista
function adicionarAmigo() {
    let nomeAmigo = inputNome.value.trim(); // Obtém o valor do input e remove espaços
    // Verifica se o campo não está vazio e contém apenas letras
    let somenteLetras = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Expressão Regular para verificar somente
    
    if (nomeAmigo && somenteLetras.test(nomeAmigo)) { // Verifica se o campo não está vazio e se contém apenas letras
    nomeAmigos.push(nomeAmigo); // Adiciona o nome ao array
    exibirLista(); // Atualiza a lista exibida
    inputNome.value = ''; // Limpa o input para o próximo nome
    } else {
    alert("Por favor, digite um nome válido (Somente nome é aceito)."); // Alerta se o campo estiver vazio ou contém caracteres inválidos
    }
    }
// Função para exibir a lista de amigos
function exibirLista() {
// Limpa a lista existente
listaAmigos.innerHTML = '';
// Itera sobre o array e cria elementos de lista para cada nome
nomeAmigos.forEach(function(nome) {
let li = document.createElement('li'); // Cria um novo elemento <li>
li.textContent = nome; // Define o texto do <li>
listaAmigos.appendChild(li); // Adiciona o <li> à lista
});
}
// Função para sortear um amigo
function sortearAmigo() {
    if (nomeAmigos.length === 0) {
    alert("Por favor, adicione amigos antes de realizar o sorteio."); // Verifica se há amigos na lista
    return;
    }
    let indiceSorteado = Math.floor(Math.random() * nomeAmigos.length); // Gera um índice aleátório
 
    let amigoSorteado = nomeAmigos[indiceSorteado]; // Pega o amigo correspondente ao índice sorteado
    
    // Exibe o resultado do sorteio
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    }