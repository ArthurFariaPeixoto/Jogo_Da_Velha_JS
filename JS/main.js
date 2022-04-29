var jogador, vencedor = null;
var jogadorAtual = document.getElementById('jogador');
var vencedorFinal = document.getElementById('vencedor');

alternaJogador('X');

function quadradoEscolhido(id){
    if(vencedor !== null){
        return;
    }

    var campo = document.getElementById(id);

    if(campo.innerHTML !== '-'){
        return;
    }

    campo.innerHTML = jogador;
    campo.style.color = '#ffffff';

    if(jogador === 'X'){
        jogador = 'O';
    }
    else{
        jogador = 'X';
    }
    alternaJogador(jogador);
    evencedor();

}

function alternaJogador(valor){
    jogador = valor;
    jogadorAtual.innerHTML = jogador;
}

function evencedor(){
    var campo1 = document.getElementById('1');
    var campo2 = document.getElementById('2');
    var campo3 = document.getElementById('3');
    var campo4 = document.getElementById('4');
    var campo5 = document.getElementById('5');
    var campo6 = document.getElementById('6');
    var campo7 = document.getElementById('7');
    var campo8 = document.getElementById('8');
    var campo9 = document.getElementById('9');

    if(sequencia(campo1, campo2, campo3)){
        mudaCor(campo1, campo2, campo3);
        mudaVencedor(campo1);
        return;
    }
    if(sequencia(campo4, campo5, campo6)){
        mudaCor(campo4, campo5, campo6);
        mudaVencedor(campo4);
        return;
    }
    if(sequencia(campo7, campo8, campo9)){
        mudaCor(campo7, campo8, campo9);
        mudaVencedor(campo7);
        return;
    }
    if(sequencia(campo1, campo4, campo7)){
        mudaCor(campo1, campo4, campo7);
        mudaVencedor(campo1);
        return;
    }
    if(sequencia(campo2, campo5, campo8)){
        mudaCor(campo2, campo5, campo8);
        mudaVencedor(campo2);
        return;
    }
    if(sequencia(campo3, campo6, campo9)){
        mudaCor(campo3, campo6, campo9);
        mudaVencedor(campo3);
        return;
    }
    if(sequencia(campo1, campo5, campo9)){
        mudaCor(campo1, campo5, campo9);
        mudaVencedor(campo1);
        return;
    }
    if(sequencia(campo3, campo5, campo7)){
        mudaCor(campo3, campo5, campo7);
        mudaVencedor(campo3);
    }
}

function sequencia(campo1, campo2, campo3){
    var igual = false;

    if(campo1.innerHTML !== '-' &&campo1.innerHTML === campo2.innerHTML && campo2.innerHTML === campo3.innerHTML){
        igual = true;
    }
    return igual;
}

function mudaCor(campo1, campo2, campo3){
    campo1.style.color = '#004100';
    campo2.style.color = '#004100';
    campo3.style.color = '#004100';
    campo1.style.background = '#009400';
    campo2.style.background = '#009400';
    campo3.style.background = '#009400';
}

function mudaVencedor(campo){
    vencedor = campo.innerHTML;
    vencedorFinal.innerHTML = vencedor;
}

function reiniciar(){
    vencedor = null;
    jogador=null;
    vencedorFinal.innerHTML = '';

    for(var i=1; i<=9; i++){
        var campo = document.getElementById(i);
        campo.style.background = '#373737';
        campo.style.color = '#373737';
        campo.innerHTML = '-';
    }

    alternaJogador('X');
}