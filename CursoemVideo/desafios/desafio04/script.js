function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){ //se nao for colocado um numero
        window.alert('Por favor, digite um numero!') //da erro

    } else{ //se for colocado algum numero
        let n = Number(num.value) //converte em numero
        let c = 1 //contador
        tab.innerHTML = '' //limpando a taboada antes de colocar outro numero

        while(c <= 10){
            //criando a taboada de 1 ate 10
            let item = document.createElement('option')
        
            //o numero vezes 1 eh igual a ...
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `tab${c}`

            //se repetindo para os restantes numeros abaixo dele
            tab.appendChild(item)
            c++
        }

    }
}