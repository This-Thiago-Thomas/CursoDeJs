function idadeCerta(){
    var anoAtual = new Date().getFullYear();
    var anoNascimento = Number(document.getElementById("cAno").value);
    var sexo = document.getElementsByName("tSexo");
    var resultado = document.querySelector("p#msg");
    var idade = anoAtual - anoNascimento;
    var img = document.getElementById("foto");
    for(let i = 0; i < sexo.length; i++){
        if(sexo[i].checked){
            sexo = sexo[i];
            break;
        }
    }
    if(anoNascimento == 0 || anoNascimento > anoAtual){
        alert("Erro, verifique os dados e tente novamente!");
    }else if(sexo.value == "M"){
        resultado.innerHTML = `<p>Detectamos um homem com ${idade} anos!</p>`;
        if(idade >=0 && idade < 10){
            img.src = "imagens/foto-bebe-m.png";
        }else if(idade >=10 && idade < 25){
            img.src = "imagens/foto-jovem-m.png";
        }else if(idade >=25 && idade < 60){
            img.src = "imagens/foto-adulto-m.png";
        }else if(idade >=60){
            img.src = "imagens/foto-idoso-m.png";
        }
    }else{
        resultado.innerHTML = `<p>Detectamos uma mulher com ${idade} anos!</p>`;
        if(idade >=0 && idade < 10){
            img.src = "imagens/foto-bebe-f.png";
        }else if(idade >=10 && idade < 25){
            img.src = "imagens/foto-jovem-f.png";
        }else if(idade >=25 && idade < 60){
            img.src = "imagens/foto-adulto-f.png";
        }else if(idade >=60){
            img.src = "imagens/foto-idoso-f.png";
        }
    }
}