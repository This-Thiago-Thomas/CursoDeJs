let valores = [];

let qtdNum = 0;
let maiorNum = 0;
let menorNum = 100;
let somaTotalNum = 0;
let mediaTotalNum = 0;

function adicionar(){
    let num = document.querySelector('input#numero').value;
    let sel = document.querySelector('select#lista');
    if(num == ""){
        alert("Por Favor, Digite um Número");
    }else{
        let numero = Number(num);
        if(!(numero >= 1 && numero <= 100)){
            alert("Erro!, Digite um Número entre 1 e 100");
        }else{
            if(valores.indexOf(numero) == -1){
                valores.push(numero);
                let item = document.createElement('option');
                item.text = `Valor ${num} inserido!`;
                sel.appendChild(item);
                qtdNum++;
                if(numero > maiorNum){
                    maiorNum = numero;
                }
                if(numero < menorNum){
                    menorNum = numero;
                }
                somaTotalNum+=numero;
            }else{
                alert("Esse Numero Já Está Inserido");
            }
        }
    }
}

function finalizar(){
    let div = document.querySelector('div#saida');
    mediaTotalNum = somaTotalNum / qtdNum;
    div.innerHTML = `<p>Ao todo, temos ${qtdNum} cadastrados</p>
    <p>O maior valor informado foi ${maiorNum}</p>
    <p>O menor valor informado foi ${menorNum}</p>
    <p>Somando todos os valores, temos ${somaTotalNum}</p>
    <p>A Média dos valores digitados é ${mediaTotalNum}</p>`
}