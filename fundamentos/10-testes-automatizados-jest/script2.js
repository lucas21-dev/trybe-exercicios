const assert = require('assert');

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
const testArr = myRemove([1, 2, 3, 4], 3); 
assert.deepStrictEqual(testArr, [1, 2, 4], 'Retorno não esperado!');

const testArr2 = myRemove([1, 2, 3, 4], 3);
assert.notDeepStrictEqual(testArr2, [1, 2, 3, 4], 'Retorno não esperado!');

const testArr3 = myRemove([1, 2, 3, 4], 0);
assert.deepStrictEqual(testArr3, [1, 2, 3, 4], 'Este array sofreu alteração!');

const testArr4 = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(testArr4, [1, 2, 3, 4], 'Deve retornar o mesmo array inserido!');