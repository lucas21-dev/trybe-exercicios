let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumero = numbers[0+2];

for (let index = 0; index < numbers.length; index += 1) {
    let numeroAtual = numbers[index]
        if (numeroAtual < menorNumero) {
            menorNumero = numeroAtual
        } else {
        }
    }
    
console.log(menorNumero)