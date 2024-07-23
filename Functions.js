var altura = 0
var largura = 0
var tempo = 15
var vida = 1

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'Normal'){
    criarMosquitoTempo = 1500
} else if (nivel === 'Dificil'){
    criarMosquitoTempo = 1000
} else if (nivel === 'JohnWick'){
    criarMosquitoTempo = 750
}

altura = window.innerHeight
largura = window.innerWidth

//console.log(largura, altura)

var cronometro = setInterval(function() {

    tempo -= 1

    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('tempo').innerHTML = tempo
    }


}, 1000)



function posicaoRandomica() {

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if(vida > 2){
            window.location.href = 'fim-de-jogo.html'
        }

        document.getElementById('v' + vida).src = "imagens/coracao_vazio.png"

        vida ++
    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //console.log(posicaoX, posicaoY)

    //criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

//classe randomica de tamanho

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }

} //console.log(tamanhoAleatorio())

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2);

    switch(lado) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
} //console.log(ladoAleatorio())

