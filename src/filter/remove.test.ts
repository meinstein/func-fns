import remove from './remove'

test('remove - one index', () => {
  expect(['foo', 'bar', 'baz'].filter(remove(1))).toEqual(['foo', 'baz'])
})

test('remove - more than one index', () => {
  expect(['foo', 'bar', 'baz'].filter(remove(1, 2))).toEqual(['foo'])
})
