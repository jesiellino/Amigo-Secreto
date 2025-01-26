let amigos = []

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo && !amigos.includes(amigo)) {
    amigos.push(amigo);
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
    }    
    else {
        if (amigo === '') {
        alert ("O campo nome está vazio.");
        }
        else { 
     alert (`O nome ${amigo} já está na lista.`);
     }
    }
}
        
 function sortearAmigo() {
     if (amigos.length === 0) {
     alert ("A lista de nomes está vazia.");
    return;
    }

    let sorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos.splice(sorteado, 1)[0];
    document.getElementById('resultado').innerText = `Nome sorteado: ${nomeSorteado}`;
    atualizarListaAmigos();
}

 function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
    let li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
    });
}
