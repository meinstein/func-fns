import length from './length'

test('length', () => {
  expect([[1, 2], 'foo'].map(length())).toEqual([2, 3])
})
