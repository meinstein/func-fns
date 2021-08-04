export const uniq = <T>(): ((value: T) => boolean) => {
  const set = new Set()

  return (value: T): boolean => {
    if (set.has(value)) return false
    set.add(value)
    return true
  }
}

export default uniq
