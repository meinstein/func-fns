type Map<T> = (value: T, index: number, array: T[]) => T[keyof T]

export const key = <T>(key: keyof T): Map<T> => {
  return (dict) => {
    return dict[key]
  }
}

export default key
