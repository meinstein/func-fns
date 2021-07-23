// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HasLengthProperty = any[] | string

type Map = (value: HasLengthProperty) => number

export const length = (): Map => {
  return (value) => {
    return value.length
  }
}

export default length
