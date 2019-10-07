/* Principal */
function calcularPrincipal(){

    let resultado = document.getElementById("resultado");
    let operacao =  document.getElementsByName("operacao");
    let x = Number(document.getElementById("valor").value);

    for(let i = 0; i < operacao.length; i++){
        if(operacao[i].checked){
            operacao = operacao[i];
            break;
        }
    }

    if(operacao.value == "fatorial"){
        let i = x - 1;
        while(i > 0){
            x = x*i;
            i--;
        }
        resultado.value = x;

    }else if(operacao.value == "ao_quad"){
        resultado.value = Math.pow(x, 2);

    }else if(operacao.value == "ao_cubo"){
        resultado.value = Math.pow(x, 3);

    }else if(operacao.value == "raiz"){
        resultado.value = Math.sqrt(x);

    }else if(operacao.value == "seno"){
        resultado.value = Math.sin(x);

    }else if(operacao.value == "meio"){
        resultado.value = x/2;

    }else{
        alert("Voce precisa selecionar uma função!");
    }
}

function limpaPrincipal(){
    let valor = document.getElementById("valor");
    let resultado = document.getElementById("resultado");
    valor.value = "";
    resultado.value = "";
}

/* 2_operandos */

function calcularDoisOperandos(){
    let n1 = Number(document.getElementById("valor1").value);
    let n2 = Number(document.getElementById("valor2").value);
    let resultado = document.getElementById("resultado");
    let operador =  document.getElementById("operador").value;

    if(operador == "mais"){
        resultado.value = n1 + n2;
    }else if(operador == "menos"){
        resultado.value = n1 - n2;
    }else if(operador == "vezes"){
        resultado.value = n1 * n2;
    }else if(operador == "divisao"){
        resultado.value = n1 / n2;
    }else if(operador == "mod"){
        resultado.value = n1 % n2;
    }

}

function limpaDoisOperandos(){
    let n1 = document.getElementById("valor1");
    let n2 = document.getElementById("valor2");
    let resultado = document.getElementById("resultado");
    n1.value = "";
    n2.value = "";
    resultado.value = "";
}

/* Conversor Moedas */

function conversorMoedas(){

    let resultado = document.getElementById("resultado");
    let conversao =  document.getElementsByName("conversao");
    let valor = Number(document.getElementById("valor").value);
    let cotacaoDollar = Number(document.getElementById("cot-dol").value);
    let cotacaoEuro = Number(document.getElementById("cot-euro").value);

    for(let i = 0; i < conversao.length; i++){
        if(conversao[i].checked){
            conversao = conversao[i];
            break;
        }
    }

    if(conversao.value == "real-dol"){
        resultado.value = (valor / cotacaoDollar).toFixed(2);

    }else if(conversao.value == "real-euro"){
        resultado.value = (valor / cotacaoEuro).toFixed(2);

    }else if(conversao.value == "dol-real"){
        resultado.value = (valor * cotacaoDollar).toFixed(2);

    }else if(conversao.value == "dol-euro"){
        resultado.value = (valor * cotacaoDollar / cotacaoEuro).toFixed(2);

    }else if(conversao.value == "euro-real"){   
        resultado.value = (valor * cotacaoEuro).toFixed(2);

    }else if(conversao.value == "euro-dol"){
        resultado.value = (valor * cotacaoEuro / cotacaoDollar).toFixed(2)

    }else{
        alert("Voce precisa selecionar uma função!");
    }
}