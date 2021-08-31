const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const sumEqual9 = sum(4, 5);
assert.strictEqual(sumEqual9, 9, '4 + 5 é igual a 9');

const sumEqual0 = sum(0, 0);
assert.strictEqual(sumEqual0, 0, 'A soma de zeros é zero!');

assert.throws(() => {
  sum(4, '5')
})

