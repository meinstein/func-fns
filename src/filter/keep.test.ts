import keep from './keep'

test('keep - one index', () => {
  expect(['foo', 'bar', 'baz'].filter(keep(1))).toEqual(['bar'])
})

test('keep - more than one index', () => {
  expect(['foo', 'bar', 'baz'].filter(keep(1, 2))).toEqual(['bar', 'baz'])
})
