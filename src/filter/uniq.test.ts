import uniq from './uniq'

test('uniq', () => {
  expect(['foo', 'foo', 'baz', 1, 1].filter(uniq())).toEqual(['foo', 'baz', 1])
})
