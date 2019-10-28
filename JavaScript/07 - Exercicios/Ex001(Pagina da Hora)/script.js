function carregar() {
    var bom = document.getElementById('bom');
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        bom.innerHTML = '<b>BOM DIA!</b>'
        img.src="turnos/1 - manha.png";
        document.body.style.background = 'rgb(255, 208, 0)';
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        bom.innerHTML = '<i>BOA TARDE!</i>'
        img.src="turnos/2 - tarde.png";
        document.body.style.background = 'rgb(246, 99, 0)';
    }else{
        //BOA NOITE!
        bom.innerHTML = '<b>BOA NOITE!</b>'
        img.src="turnos/3 - noite.png";
        document.body.style.background = 'rgb(7, 20, 207)';
    }
}