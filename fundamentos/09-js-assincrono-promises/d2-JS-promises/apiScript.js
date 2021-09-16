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

  const promise = new Promise((resolve, reject) => {
  const array = Array.from({ length: 10 }, () => (Math.floor(Math.random() * 50)));
  console.log(array);
  const arrayAoQuadrado = array.map((number) => number * number);
  const sum = arrayAoQuadrado.reduce((acc, number) => number + acc);
  console.log(sum);
  if (sum < 8000) {
    return resolve();
  }
  return reject()
  })
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'))
};

window.onload = () => fetchJoke();
