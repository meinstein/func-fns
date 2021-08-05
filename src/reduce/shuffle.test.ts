import shuffle from './shuffle'

// NOTE: kinda hard to test psuedo random stuffs - smoke tests will suffice.
test('shuffle - values still present (albeit likely at new index location)', () => {
  expect([1, 2, 3, 4, 5, 6].reduce(...shuffle()).sort()).toEqual([
    1, 2, 3, 4, 5, 6,
  ])
})
