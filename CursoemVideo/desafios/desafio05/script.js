let num = document.querySelector('input#fnum')//numero1
let lista = document.querySelector('select#flista')//lista nums
let res = document.querySelector('div#res')//div resposta
let valores = []

function isNumero(n){ //isNumero recebe um numero
    if(Number(n) >= 1 && Number(n) <= 100){
        //se o numero for entre 1 e 100, eh verdade
        return true

    } else {
        //se for maior que 100, eh falso
        return false 
    }
}
function inLista(n, l){ //nLista recebe um numero
    if (l.indexOf(Number(n)) != -1){
        //se o valor nao foi encontrado na lista, eh vdd
        return true

    } else {
        //se o valor ja estiver na lista, eh falso
        return false
    }
}

function adicionar(){
    //vai analizar se o VALUE do NUM eh um numero, e so vai ser adicionado se o numero nao estiver na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){

        valores.push(Number(num.value))
        let item = document.createElement('option') //cria lista
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //adiciona abaixo um novo numero
        res.innerHTML = '' //quando adicionar um numero, a resposta tem que ser limpada para usar o VERIFICAR

    } else {//se faltar alguima coisa...
        window.alert('[ERRO] Valor invalido ou ja adicionado na lista.')
    }

    num.value = '' //limpando o espaco para colocar um novo numero
    num.focus() //quando enviar, nao precisar clicar novamente p add
}

function finalizar(){
    if (valores.length == 0){ //se n tiver valores adicionados..
        window.alert('Adicione valores antes de finalizar!')//ERRO

    } else{ //se tiver numeros adicionados, verefique...
        //v v v total de numeros cadastradrados
        let tot = valores.length 
        let maior = valores[0] 
        let menor = valores[0] 
        let soma = 0
        let media = 0


        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados. </p>`
        res.innerHTML += `<p>O menor valor informado da lista foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor informado da lista foi ${maior}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos  ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados eh ${media}.</p>`
    } 
}

