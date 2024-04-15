let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acretou!");
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativas";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativatentativas}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela("p", " O número é menor ");
    } else {
        exibirTextoNaTela("p", "O numero secreto é maior");
    }
    tentativas++;
    limparCampo();

    console.log(chute == numeroSecreto);
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(params) {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}