function calcularPrincipal(){

    var resultado = document.getElementById("resultado");
    var operacao =  document.getElementsByName("operacao");
    var x = Number(document.getElementById("valor").value);

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