const fixar = require('./script');

test('teste exercicio 1 fixação', () => {
  fixar.subtrair = jest.fn();

  fixar.subtrair();
  expect(fixar.subtrair).toHaveBeenCalled();
})

test('teste exercicio 2 fixação', () => {
  fixar.somar = jest.fn().mockReturnValue(10);
  fixar.somar();
  expect(fixar.somar).toHaveBeenCalled();
  expect(fixar.somar()).toBe(10);
})

test('teste exercicio 3 fixação', () => {
  fixar.somar = jest.fn().mockImplementation((a, b) => a + b);
  fixar.somar(5, 6);
  expect(fixar.somar).toHaveBeenCalled();
  expect(fixar.somar).toHaveBeenCalledWith(5, 6);
  expect(fixar.somar(5, 5)).toBe(10);
})

test('teste exercicio 4 fixacao', () => {
  fixar.dividir = jest.fn().mockReturnValue(15)

  fixar.dividir(2, 5);
  fixar.dividir(2, 5);

  expect(fixar.dividir).toHaveBeenCalled();
  expect(fixar.dividir(2, 5)).toBe(15);
  expect(fixar.dividir).toHaveBeenCalledWith(2, 5);
  expect(fixar.dividir).toHaveBeenCalledTimes(3);
})

test('Teste exercicio 5 fixação', () => {
  fixar.subtrair = jest
    .fn()
    .mockImplementation((a, b) => a - b)
    .mockReturnValue(20)

    expect(fixar.subtrair(1)).toBe(20);
    expect(fixar.subtrair).toHaveBeenCalledTimes(1);
})