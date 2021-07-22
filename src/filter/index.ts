export const index = <T>(index: number) => {
  return (_: T, _index: number): boolean => {
    return index !== _index
  }
}

export default index
