import sum from './sum'

test('sum', () => {
  expect([1, 2, 3].reduce(sum())).toBe(6)
})
