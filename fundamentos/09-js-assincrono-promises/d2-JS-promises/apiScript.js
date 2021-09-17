// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((response) => {
      const h2 = document.getElementById('jokeContainer');
      const p = document.createElement('p');
      p.innerText = response.joke;
      h2.appendChild(p);
    })

new Promise((resolve, reject) => {
  const array = Array.from({ length: 10 }, () => (Math.floor(Math.random() * 50)));
  const arrayAoQuadrado = array.map((number) => number * number);
  const sum = arrayAoQuadrado.reduce((acc, number) => number + acc);
  
  if (sum < 8000) {
    return resolve(sum);
  }
  return reject()
})
.then((sum) => [sum / 2, sum / 3, sum / 5, sum / 10])
.then((arrRef) => console.log(arrRef.reduce((acc, number) => acc + number )))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))

};

window.onload = () => fetchJoke();
