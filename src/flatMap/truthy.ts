type Map<T> = (value: T | undefined | null) => T[]

export const truthy = <T>(): Map<T> => {
  return (value) => {
    return value === undefined || value === null ? [] : [value]
  }
}

export default truthy
