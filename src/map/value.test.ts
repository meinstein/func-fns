import value from './value'

test('value', () => {
  expect([{ id: 'foo' }, { id: 'bar' }].map(value('id'))).toEqual([
    'foo',
    'bar',
  ])
})
