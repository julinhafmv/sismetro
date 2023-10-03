var valor;
var operacao;
var memoria = 0;

function del_num(){
    valor = subtracao_m(Number(document.getElementById("valor").value))

}
function subtracao_m(n1) {
    memoria -= n1
    return console.log(memoria)
}


function add_num(){
    valor = adicao_m(Number(document.getElementById("valor").value))
    
}
function adicao_m(n1) {
    memoria += n1
    return console.log(memoria);
}



function limpar_memoria() {


}


function subtrair_memoria() {


}


function somar_memoria() {
valor = adicao_m(Number(document.getElementById("valor").value));
return console.log (memoria)

}


function resultado_memoria() {
adicao_m
}



function porcent() {
    if (typeof valor == typeof undefined) {
        document.getElementById("valor").value =
            Number(document.getElementById("valor").value) / 100;
    } else {
        document.getElementById("valor").value =
            (valor / 100) *
            Number(document.getElementById("valor").value);

    }
}

function ponto() {
    if (!document.getElementById("valor").value.includes("."))
        document.getElementById("valor").value = document.getElementById("valor").value.concat(".");

}

function limpar() {
    document.getElementById("valor").value = ""
    valor = undefined;
    operacao = undefined;
}

function efetuar_soma() {
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined) {
        valor = operacao(valor, Number(document.getElementById("valor").value));
    } else {
        valor = Number(document.getElementById("valor").value);
    }
    document.getElementById("valor").value = "";

    operacao = soma;
}

function efetuar_subtracao() {
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined) {
        valor = operacao(valor, Number(document.getElementById("valor").value));
    } else {
        valor = Number(document.getElementById("valor").value);
    }
    document.getElementById("valor").value = "";

    operacao = subtracao;
}

function efetuar_divisao() {
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined) {
        valor = operacao(valor, Number(document.getElementById("valor").value));
    } else {
        valor = Number(document.getElementById("valor").value);
    }
    document.getElementById("valor").value = "";

    operacao = divisao;
}

function efetuar_multiplicacao() {
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined) {
        valor = operacao(valor, Number(document.getElementById("valor").value));
    } else {
        valor = Number(document.getElementById("valor").value);
    }
    document.getElementById("valor").value = "";

    operacao = multiplicacao;
}

function resultado() {
    document.getElementById("valor").value = operacao(valor, Number(document.getElementById("valor").value));
    valor = undefined;
    operacao = undefined;
}


function insere_0() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(0);
}

var valor
function insere_1() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(1);
}

var valor
function insere_2() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(2);
}
var valor
function insere_3() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(3);
}
var valor
function insere_4() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(4);
}
var valor
function insere_5() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(5);
}
var valor
function insere_6() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(6);
}
var valor
function insere_7() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(7);
}
var valor
function insere_8() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(8);
}
var valor
function insere_9() {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(9);
}

function apagar() {
    document.getElementById("valor").value = document.getElementById("valor").value.substring(0, document.getElementById("valor").value.length - 1)
}

/////////

function soma(n1, n2) {


    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}