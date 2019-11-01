function contagem(){
    var cx1 = document.getElementById('cInicio').value;
    var cx2 = document.getElementById('cFim').value;
    var cx3 = document.getElementById('cPasso').value;
    var resultado = document.getElementById('resultado');
    if(cx1 == "" || cx2 == "" || cx3 == ""){
        resultado.innerText = "Impossível contar!";
    }else{
        var inicio = Number(cx1);
        var fim = Number(cx2);
        var passo = Number(cx3);
        if(passo == 0){
            alert("Passo Inválido, Considerando Passo 1");
            passo = 1;
        }
        var contagem = "";
        if(inicio <= fim){
            for(let x = inicio; x < fim; x+=passo){
                contagem += `${x}\u{1F449}`; 
            }
        }else{
            for(let x = inicio; x > fim; x-=passo){
                contagem += `${x}\u{1F449}`; 
            }
        }
        contagem += `\u{1F3C1}`;
        resultado.innerHTML = `Contando:<br> ${contagem}`;
    }
}