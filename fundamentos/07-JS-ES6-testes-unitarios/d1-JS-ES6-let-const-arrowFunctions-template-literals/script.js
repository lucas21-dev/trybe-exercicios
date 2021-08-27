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
  let oldNumber = 1;
  for (let index = 2; index <= number; index += 1) {
    oldNumber *= index;
    }
  console.log(oldNumber);  
}

factorial(5);

