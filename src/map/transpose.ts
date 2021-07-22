type Map<T> = (value: T, index: number, array: T[]) => T

export const transpose = <T>(indexA: number, indexB: number): Map<T> => {
  return (value, index, array) => {
    if (index === indexA) return array[indexB]
    if (index === indexB) return array[indexA]
    return value
  }
}

export default transpose
