function verificar(){
    var data = new Date() //pegando a data de hoje
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!') //se o ano for igual a 0, ou se o numero do ano digitado for maior que o presente, da erro
    } else{ //se escrever o ano corretamente..
        var fsex = document.getElementsByName('radsex') //fsex = genero
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //se o fsex (GENERO) for 0 (HOMEM) for checked (ESCOLHIDO)
        if (fsex[0].checked) {
            genero = 'Homem'

            //se a idade for entre 0 e 10 anos
            if (idade >=0 && idade <10){//crianca
                img.setAttribute('src', 'imagens/homemcrianca.png')
            } else if (idade < 21){//se for menor q 21 = jovem
                img.setAttribute('src', 'imagens/homemjovem.png')
            } else if (idade <50){//se for menor q 50 = adulto
                img.setAttribute('src', 'imagens/homemadulto.png')
            } else {//se for maior q 50 = velho
                img.setAttribute('src', 'imagens/homemidoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'      
            
            //se a idade for entre 0 e 10 anos
            if (idade >=0 && idade <10){//crianca
                img.setAttribute('src', 'imagens/mulhercrianca.png')
            } else if (idade < 21){//se for menor q 21 = jovem
                img.setAttribute('src', 'imagens/mulherjovem.png')
            } else if (idade <50){//se for menor q 50 = adulto
                img.setAttribute('src', 'imagens/mulheradulta.png')
            } else {//se for maior q 50 = velho
                img.setAttribute('src', 'imagens/mulheridosa.png')
            }
        }

        //resposta
        res.style.textAlign = 'center'

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}