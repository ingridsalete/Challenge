//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome !== "" && !listaAmigos.includes(nome)) {
        listaAmigos.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    
    listaAmigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}