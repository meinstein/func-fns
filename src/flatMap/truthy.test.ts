import truthy from './truthy'

test('insert', () => {
  expect(['foo', undefined, 'baz', null].flatMap(truthy())).toEqual([
    'foo',
    'baz',
  ])
})
