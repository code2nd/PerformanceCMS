import { coordinateData } from './coordinate-data'

export const convertData = function (data: any[]) {
  const res = []
  let max = 0
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      const value = geoCoord.concat(data[i].value)
      res.push({
        name: data[i].name,
        value
      })

      if (max < value[2]) {
        max = value[2]
      }
    }
  }

  return { res, max }
}

// 向上取整
export const convertCeil = (num: number) => {
  const arr = Array.from(String(num))
  const first = arr[0]
  const res = Array.from({ length: arr.length }, () => 0)
  if (first === '9' || arr.length === 1) {
    res.unshift(1)
  } else {
    res[0] = Number(first) + 1
  }

  return Number(res.join(''))
}
