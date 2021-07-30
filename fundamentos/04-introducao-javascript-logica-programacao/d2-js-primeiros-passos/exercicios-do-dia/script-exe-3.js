let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let soma = 0;
for (let lista of numbers) {
    soma += lista
}
console.log(soma / numbers.length)