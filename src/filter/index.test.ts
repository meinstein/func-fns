import index from '.'

test('index', () => {
  expect(['foo', 'bar', 'baz'].filter(index(1))).toEqual(['foo', 'baz'])
})
