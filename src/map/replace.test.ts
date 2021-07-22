import replace from './replace'

test('replace', () => {
  expect(['foo', 'bar', 'baz'].map(replace(1, 'foo'))).toEqual([
    'foo',
    'foo',
    'baz',
  ])
})
