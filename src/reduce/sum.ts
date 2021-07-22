type Reduce<T> = (
  previousValue: T,
  currentValue: T,
  currentIndex: number,
  array: T[],
) => T

export const sum = (): Reduce<number> => {
  return (previousValue, currentValue) => {
    return (previousValue || 0) + currentValue
  }
}

export default sum
