let valores = [8, 1, 7, 4, 2, 9]

 
//a variavel criada POS comeca com 0
//se POS for menor do que o tamanho do VETOR
//POS recebe mais um
/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}