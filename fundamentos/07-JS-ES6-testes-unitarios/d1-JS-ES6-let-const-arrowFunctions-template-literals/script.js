// Parte 1 do exercício:

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ' ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortedOddsAndEvens = oddsAndEvens.sort((a,b) => a - b);

// console.log(`Os números ${sortedOddsAndEvens} se encontram ordenados de forma crescente!`); 

// Parte 2 do exercício

const factorial = (number) => {
  return number === 0 ? 1 : number * factorial(number - 1);  
}

// console.log(factorial(5));

function biggestWord (frase) {
  const arrayOfWords = frase.split(' ');
  let word = 0;
  let index;
  for (let biggest of arrayOfWords) {
    if (biggest.length > word) {
      word = biggest.length;
      index = biggest;
    }
  }
  console.log(index);
}

biggestWord('Antônio foi no banheirão e não sabemos o que aconteceu');