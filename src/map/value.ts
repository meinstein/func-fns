type Map<T> = (value: T, index: number, array: T[]) => T[keyof T]

export const value = <T>(key: keyof T): Map<T> => {
  return (_value) => {
    return _value[key]
  }
}

export default value
