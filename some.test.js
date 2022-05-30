import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './myFunctions';

test('Capitalize function #1', () => {
  expect(capitalize('abc')).toBe('A');
})

test('Capitalize function #2', () => {
  expect(capitalize('some string')).toBe('S');
})

test('reverseString function #1', () => {
  expect(reverseString('abcd')).toBe('dcba');
})

test('reverseString function #2', () => {
  expect(reverseString('Some String')).toBe('gnirtS emoS');
})

test('reverseString function #3', () => {
  expect(reverseString('Hello, Jack!')).toBe('!kcaJ ,olleH');
})

test('calculator add', () => {
  expect(calculator.add(3, 5)).toBe(8);
})

test('calculator subtract', () => {
  expect(calculator.subtract(8, 5)).toBe(3);
})

test('calculator divide', () => {
  expect(calculator.divide(8, 4)).toBe(2);
})

test('calculator multiply', () => {
  expect(calculator.multiply(8, 4)).toBe(32);
})

test('caesarCipher #1', () => {
  expect(caesarCipher('abcd efg', 3)).toBe('defg hij')
})

test('caesarCipher #2', () => {
  expect(caesarCipher('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 5))
    .toBe('Qtwjr nuxzr itqtw xny frjy, htsxjhyjyzw finunxhnsl jqny, xji it jnzxrti yjrutw nshninizsy zy qfgtwj jy itqtwj rflsf fqnvzf.')
})

test('caesarCipher #3', () => {
  expect(caesarCipher('Hello, Caesar!', 15)).toBe('Wtaad, Rpthpg!')
})

test('analyzeArray', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});