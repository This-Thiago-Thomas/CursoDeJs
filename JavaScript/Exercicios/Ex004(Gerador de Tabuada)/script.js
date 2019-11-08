function tabuada(){
    var num = document.getElementById('cNum').value;
    if(num == ""){
        alert("Por Favor, Digite um Número");
    }else{
        var selRes = document.getElementById('cRes');
        var numero = Number(num);
        var x = 1;
        selRes.innerHTML = ""
        while(x<=10){
            var item = document.createElement('option');   //Cria uma TAG
            item.text = `${numero} x ${x} = `+ numero * x;
            selRes.appendChild(item);                      //Coloca uma Tag Dentro da Tag
            x++
        }
        //selRes.setAttribute("size","10");                //Coloca mais um atributo na TAG aaah
    }
}