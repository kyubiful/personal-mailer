export const isString = (data: any): boolean => {
  if (typeof data === 'string' || data instanceof String) {
    return true
  }
  return false
}

export const isNumber = (data: any): boolean => {
  if (typeof data === 'number') {
    return true
  }
  return false
}
