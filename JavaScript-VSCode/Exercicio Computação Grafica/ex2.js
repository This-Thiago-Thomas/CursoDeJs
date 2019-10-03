function calcSal(){
    var novosalario,resultado,cargo, aumentoreal;
    var salario = Number(document.getElementById('salario').value);
    var aumento = Number(document.getElementById('codigo').value);
    if(aumento == 1){
        aumentoreal = salario*0.5;
        novosalario = salario + aumentoreal;
        cargo = "Escrituário";
    }
    if(aumento == 2){
        aumentoreal = salario*0.35;
        novosalario = salario + aumentoreal;
        cargo = "Secretário";
    }
    if(aumento == 3){
        aumentoreal = salario*0.2;
        novosalario = salario + aumentoreal;
        cargo = "Caixa";
    }
    if(aumento == 4){
        aumentoreal = salario*0.1;
        novosalario = salario + aumentoreal;
        cargo = "Gerente";
    }
    if(aumento == 5){
        aumentoreal = 0;
        novosalario = salario;
        cargo = "Diretor";
    }
    resultado = document.getElementById('resultado');
    resultado.innerText = "O cargo é "+ cargo +"\nO valor do aumento é R$:" + aumentoreal + "\nO novo salário é R$:"+novosalario;
}
