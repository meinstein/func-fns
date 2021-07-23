export const remove = <T>(...index: number[]) => {
  return (_: T, _index: number): boolean => {
    return !index.includes(_index)
  }
}

export default remove
