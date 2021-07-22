import insert from './insert'

test('insert', () => {
  expect(['foo', 'bar', 'baz'].reduce(...insert('foo', 1))).toEqual([
    'foo',
    'foo',
    'bar',
    'baz',
  ])
})

test('insert - append when given index is one more than length', () => {
  expect(['foo', 'bar', 'baz'].reduce(...insert('foo', 3))).toEqual([
    'foo',
    'bar',
    'baz',
    'foo',
  ])
})
