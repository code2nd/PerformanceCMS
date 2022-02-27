export function handleQueryParameters(obj: Record<string, unknown>) {
  const copiedObj = JSON.parse(JSON.stringify(obj))
  const newObj: Record<string, unknown> = {}
  for (const item in copiedObj) {
    if (copiedObj[item] != null && copiedObj[item] !== '') {
      if (copiedObj[item] instanceof Array) {
        copiedObj[item] = copiedObj[item].join(',')
      }
      newObj[item] = copiedObj[item]
    }
  }

  return newObj
}
