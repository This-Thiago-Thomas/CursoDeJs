function calculo(){
    var delta, x1, x2, raizdelta;
    var a = Number(document.getElementById("txta").value);
    var b = Number(document.getElementById("txtb").value);
    var c = Number(document.getElementById("txtc").value);
    var resultado = document.getElementById('resultado');
    if(a == 0){
        resultado.innerText = "Esses valores não formam uma equação de 2";
    }else{
        delta = Number((b*b)-(4*a*c));
        raizdelta = Math.sqrt(delta); 
        if(delta < 0){
            resultado.innerText = "Não existe raiz real";
        }else if(delta == 0){
            x1 = Number((-b)/(2*a));
            resultado.innerText = "Existe uma raiz real, x1 = "+x1;
        }else{
            x1 = Number((-b + raizdelta) / (2*a));
            x2 = Number((-b - raizdelta) / (2*a));
            resultado.innerText = "Existem duas raizes reais,  x1 = " + x1 + ", x2 = " + x2;
        }
    }
}