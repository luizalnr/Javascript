let dolar = 5.1

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () =>{
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")

//funcoes
function formatCurrency(value){
    //ajustar o valor
    let fixedValue = fixValue(value)
    //utilizar funcao de formatar
    let options = {
        useGrouping: false,                  
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    //retorna o valor formatado
    return formatter.format(fixedValue)
}

function fixValue(value){
    //let que troca a virgula pelo ponto
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)

    //se escrever alguma letra, o valor eh 0
    if (floatValue == NaN){
        floatValue = 0 
    }

    return floatValue
}
/* EXPLICANDO A FUNCTION DE CIMA
 1- troca a virgula pelo ponto
 2- transforma a string em um numero
 3- verefica se ta certo
 3.1- se der errado (tiver uma letra), poe 0
 3.2- se der certo, retorna o valor correto
*/

function convert(type){
    if (type == "usd-to-brl"){
        //ajustar o valor
        let fixedValue = fixValue(usdInput.value)

        //converter o valor
        let result = fixedValue * dolar
        result= result.toFixed(2)//2 decimais

        //mostra no campo de real
        brlInput.value = formatCurrency(result)
    }

    if (type == "brl-to-usd"){
        //ajustar o valor
        let fixedValue = fixValue(brlInput.value)

        //converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)
        
        //mostra no campo de real
        usdInput.value = formatCurrency(result)
    }

}