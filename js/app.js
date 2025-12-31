let listaAmigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value == ''){
        alert("Por favor, insira um nome válido.");
        //O uso de return aqui serve para evitar que o código continue sendo executado
        return;
    }

    if (listaAmigos.map(a => a.toUpperCase()).includes(amigo.value.toUpperCase())){
        alert("Esse nome já foi adicionado à lista.");
        return;
    }

    let listaAmigosIncluidos = document.getElementById("lista-amigos");
    listaAmigos.push(amigo.value);
    if (listaAmigosIncluidos.textContent == '') {
        listaAmigosIncluidos.textContent = amigo.value.toUpperCase();
    } else {
        listaAmigosIncluidos.textContent = listaAmigosIncluidos.textContent + ', ' + amigo.value.toUpperCase();
    }
    
    document.getElementById("nome-amigo").value = '';
}

function sortear() {

    if (listaAmigos.length < 4){
        alert("É necessário ter pelo menos 4 amigos para realizar o sorteio!");
        return;
    }

    embaralha(listaAmigos);
    let listaSorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < listaAmigos.length; i++ ){

        if (i == listaAmigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[i + 1] + '<br>';
        }
            
    }

}


function reiniciar() {
    document.getElementById("lista-amigos").textContent = '';
    document.getElementById("lista-sorteio").textContent = '';
    listaAmigos = [];

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
