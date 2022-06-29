export const map = (arr: any[], f: (x: any) => any): any[] => {
  const result = []
  for (const e of arr) {
    result.push(f(e))
  }
  return result
}

export const filter = (arr: any[], pred: (x: any) => boolean): any[] => {
  const result = []
  for (const e of arr) {
    if (pred(e)) {
      result.push(e)
    }
  }
  return result
}

export const reduce = (
  arr: any[],
  f: (x: any, acc: any) => any,
  init: any,
): any => {
  let result = init

  for (const e of arr) {
    result = f(e, result)
  }

  return result
}
