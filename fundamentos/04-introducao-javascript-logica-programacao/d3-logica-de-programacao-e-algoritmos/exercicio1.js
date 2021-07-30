//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 20;
let asteriscos = '*';
let asteriscos2 = asteriscos.repeat(n)
if (n > 1) {
    for (let index = 0; index < n; index += 1) {
        console.log(asteriscos2) * index;
}
}

