const assert = require('assert');

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

const array1 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepStrictEqual(array1, [1, 2, 4]);

const array2 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.notDeepStrictEqual(array2, [1, 2, 3, 4]);
