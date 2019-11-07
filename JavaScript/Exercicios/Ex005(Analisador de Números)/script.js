let valores = [];
let sel = document.getElementById('cSel');
let num = Number(document.getElementById('numero').value);
function adicionar(){
    alert(num);
    if(!(num >= 1 && num <= 100)){
        alert("Erro!, Digite um Número entre 1 e 100");
    }else{
        if(valores.indexOf(num) == -1){
            alert("Erro!, Já existe esse numero!");
        }else{
            valores.push(num);
            var item = document.createElement('option');
            item.text = `valor ${num} adicionado`;
            sel.appendChild(item);
        }
    }
}