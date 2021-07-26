import key from './key'

test('key', () => {
  expect([{ id: 'foo' }, { id: 'bar' }].map(key('id'))).toEqual(['foo', 'bar'])
})
