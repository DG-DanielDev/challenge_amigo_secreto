// Adiciona um amigo à lista
function adicionarAmigo() {
    if(validarEntrada() == true) {
        amigos.push(input.value);
        visualizarLista();
        input.value = '';
        // atualizarBotaoAdicionar();
    }
}

// Verifica se a entrada é um nome válido e impede de adicionar apenas números
function validarEntrada() {
    if(input.value == '' || input.value/input.value == 1) {
        alert('Por favor, insira um nome válido.');
        return false;
    } else {
        return true;
    }
}

// Exibe a lista de amigos na página
function visualizarLista() {
    if(amigos.length >= 1) {
        lista.innerHTML = '';
        for(let i = 0; i < amigos.length; i++) {
            lista.innerHTML += `<li>${amigos[i]}</li>`;
        }
    }
}

// Atualiza o botão de adicionar amigo
// function atualizarBotaoAdicionar() {
//     if(input.value == '') {
//         botaoAdicionar.setAttribute('disabled', "disabled");
//     } else {
//         botaoAdicionar.removeAttribute('disabled');
//     }
// }

// Sorteia um amigo da lista
function sortearAmigo() {
    let sorteado;
    if(amigos.length >= 1) {
        lista.innerHTML = '';
        sorteado = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = document.getElementById('resultado');
        nomeSorteado.innerHTML = `O amigo secreto sorteado é: ${amigos[sorteado]}`;
        amigos.splice(sorteado, 1); // Remove o amigo sorteado da lista
    }
    else {
        alert('Adicione amigos para sortear!');
    }
    console.log(amigos);
}

// Programa principal
let amigos = [];
let lista = document.getElementById('listaAmigos');
let input = document.getElementById('amigo');
// let botaoAdicionar = document.getElementsByClassName('button-add')[0];
// document.getElementById('amigo').addEventListener('input', atualizarBotaoAdicionar);
// atualizarBotaoAdicionar();