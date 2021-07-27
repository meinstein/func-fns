type Map<T> = (value: T) => T[]

export const truthy = <T>(): Map<T> => {
  return (value) => {
    return value === undefined || value === null ? [] : [value]
  }
}

export default truthy
