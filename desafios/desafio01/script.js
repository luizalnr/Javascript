function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 22

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

/* 
dia 6 - 12
tarde 12 - 18
noite 18 - 23
madrugada 00 - 6
*/

    if(hora >= 5 && hora < 8){
        //madruga
        img.src = 'imagens/earlymorning.png'
        document.body.style.background = '#18191E'
    }else if(hora >= 8 && hora < 14){
        //dia
        img.src = 'imagens/day.png'
        document.body.style.background = '#E2A45E'
    }else if(hora >= 14 && hora < 20){
        //tarde
        img.src = 'imagens/afternoon.png'
        document.body.style.background = '#C3330A'
    }else {
        //noite
        img.src = 'imagens/night.png'
        document.body.style.background = '#020623'
    }
}

