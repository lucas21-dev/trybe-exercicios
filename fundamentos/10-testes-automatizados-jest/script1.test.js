
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

describe('test sum', () => {
  it('sum equal 9', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('sum equal 0', () => {
    expect(0).toBe(sum(0, 0));
  });

  it('test if the function throw an error when you put a string in parameter', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it('test if error message is "parameters must be numbers"', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});


// const sumEqual9 = sum(4, 5);
// assert.strictEqual(sumEqual9, 9, '4 + 5 é igual a 9');

// const sumEqual0 = sum(0, 0);
// assert.strictEqual(sumEqual0, 0, 'A soma de zeros é zero!');

// assert.throws(() => {
//   sum(4, '5');
// });

// assert.throws(() => {
//   sum(4, '5');
// }, /^Error: parameters must be numbers$/);