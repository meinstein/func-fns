type Reduce<T> = (
  previousValue: T[],
  currentValue: T,
  currentIndex: number,
  array: T[],
) => T[]

export const shuffle = <T>(): [Reduce<T>, T[]] => {
  const callback: Reduce<T> = (_, currentValue, currentIndex, array) => {
    const newIndex = Math.floor(Math.random() * array.length)
    const tmp = array[newIndex]
    array[newIndex] = currentValue
    array[currentIndex] = tmp
    return array
  }
  const initialArray: T[] = []

  return [callback, initialArray]
}

export default shuffle
