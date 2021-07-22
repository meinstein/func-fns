import transpose from './transpose'

test('transpose', () => {
  expect(['foo', 'bar', 'baz'].map(transpose(1, 2))).toEqual([
    'foo',
    'baz',
    'bar',
  ])
})
