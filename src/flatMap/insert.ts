type Map<T> = (value: T, index: number, array: T[]) => T[]

export const insert = <T>(value: T, index: number): Map<T> => {
  return (currValue, currIndex, array) => {
    // Scenario: insert before
    if (index === currIndex) {
      return [value, currValue]
    }

    // Scenario: appending
    if (index === array.length && currIndex === array.length - 1) {
      return [currValue, value]
    }

    return [currValue]
  }
}

export default insert
