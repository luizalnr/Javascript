/*
function contar(){
    let ini = document.getElementById ('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById ('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //se a pessoa n colocar algum numero
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO Faltam dados!')

    } else{ //se estiver tudo certo...
        res.innerHTML = 'Contando: <br>'

        //converte o value(VALOR) que esta dentro do ini(INICIO) em number(NUMERO)
        let i = Number(ini.value)   //primeiro numero
        let f = Number(fim.value)   //segundo numero
        let p = Number(passo.value) //contagem de passo

        if (p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }

        if( i < f){ //se o numero 1 for menor do que o numero 2
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
    */

function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {//se faltar algum dado

        res.innerHTML = ('Impossivel contar! Tente novamente.')
        window.alert('[ERRO] Faltam dados!')

    }else { //se ocorrer tudo certinho...
        res.innerHTML = ('Contando: <br>')

        //convertendo o valor das let em numeros
        var i = Number (ini.value)
        var f = Number (fim.value)
        var p = Number (pas.value)

        if (p <= 0) { //se o numero de passos for 0
            window.alert('[ERRO] Passo invalido! Considerando passo 1')
            p = 1
        }

        if (i < f) { //se o numero1 for menor doq o numero2
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }

        } else //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
    }  
}