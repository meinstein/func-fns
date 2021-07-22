type Map<T> = (value: T, index: number, array: T[]) => T

export const replace = <T>(index: number, value: T): Map<T> => {
  return (_value, _index) => {
    return _index === index ? value : _value
  }
}

export default replace
