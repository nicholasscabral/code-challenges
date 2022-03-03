function arrayDiff(a, b) {
  const arr1 = [...new Set(a)]
  const arr2 = [...new Set(b)]
  
  return arr1.filter(x => !arr2.includes(x))
}
