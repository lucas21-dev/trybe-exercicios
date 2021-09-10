const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name) => acc += (name.split('A').length - 1) + (name.split('a').length - 1), 0);
}

assert.deepStrictEqual(containsA(), 20);