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
};

window.onload = () => fetchJoke();
