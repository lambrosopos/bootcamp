const SUM = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(SUM(1, 2)).toBe(3);
});

test('adds -1 + 2 to equal 1', () => {
  expect(SUM(-1, 2)).toBe(1);
});

test('undefined + number should be NaN', () => {
  expect(SUM(undefined, 2)).toBe(NaN);
});
