const randomNumber = (betNumber, checkNumber) => {
  const random = Math.floor(Math.random() * 5) + 1;
  return checkNumber(random, betNumber);
}

const checkNumber = (randomN, betnum) => {
  const result = randomN === betnum ? 'Parabéns você ganhou!' : 'Tente novamente';
  return result;
}

console.log(randomNumber(3, checkNumber));
