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

export const isEmptyString = (data: any): boolean => {
  if ((typeof data === 'string' || data instanceof String) && data.length !== 0) {
    return true
  }
  return false
}
