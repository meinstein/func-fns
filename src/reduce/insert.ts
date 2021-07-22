export type Reduce<T> = (
  previousValue: T[],
  currentValue: T,
  index: number,
  array: T[],
) => T[]

export const insert = <T>(
  newItem: T,
  insertIndex: number,
): [Reduce<T>, T[]] => {
  const callback: Reduce<T> = (previousValue, currentValue, index, array) => {
    // Scenario: insert before
    if (index === insertIndex) {
      return previousValue.concat(newItem, currentValue)
    }

    // Scenario: appending
    if (insertIndex === array.length && index === array.length - 1) {
      return previousValue.concat(currentValue, newItem)
    }

    return previousValue.concat(currentValue)
  }

  const initialValue = [] as T[]

  return [callback, initialValue]
}

export default insert
