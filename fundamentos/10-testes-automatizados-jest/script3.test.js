function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

describe('Exercicio 3', () => {
  it('Testa se retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });
  
  it('Teste se NÃO retorna o array esperado', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });

  it('Testa se o array sofreu alterações', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 0));
  });

  it('Testa se retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
  });
});

// const array1 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
// assert.deepStrictEqual(array1, [1, 2, 4]);

// const array2 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
// assert.notDeepStrictEqual(array2, [1, 2, 3, 4]);

// const array3 = myRemoveWithoutCopy([1, 2, 3, 4], 0);
// assert.deepStrictEqual(array3, [1, 2, 3, 4]);

// const array4 = myRemoveWithoutCopy([1, 2, 3, 4], 5);
// assert.deepStrictEqual(array4, [1, 2, 3, 4]);
