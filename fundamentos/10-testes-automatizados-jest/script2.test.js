function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

describe('Segundo exercicio', () => {
  it('Testa se retorna o array esperado', () => {
    const testArray = [1, 2, 4];
    expect(testArray).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Testa se não retorna o array esperado', () => {
    const testArray2 = [1, 2, 3, 4];
    expect(testArray2).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Testa se o array passado não sofre alterações', () => {
    const testArr3 = [1, 2, 3, 4];
    expect(testArr3).toEqual(myRemove([1, 2, 3, 4], 0));
  });

  it('Testa se retorna o array esperado', () => {
    const testArr4 = [1, 2, 3, 4];
    expect(testArr4).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});


// const testArr = myRemove([1, 2, 3, 4], 3); 
// assert.deepStrictEqual(testArr, [1, 2, 4], 'Retorno não esperado!');

// const testArr2 = myRemove([1, 2, 3, 4], 3);
// assert.notDeepStrictEqual(testArr2, [1, 2, 3, 4], 'Retorno não esperado!');

// const testArr3 = myRemove([1, 2, 3, 4], 0);
// assert.deepStrictEqual(testArr3, [1, 2, 3, 4], 'Este array sofreu alteração!');

// const testArr4 = myRemove([1, 2, 3, 4], 5);
// assert.deepStrictEqual(testArr4, [1, 2, 3, 4], 'Deve retornar o mesmo array inserido!');