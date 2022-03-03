function plusMinus(arr) {
  // Write your code here
  const total = arr.length
  let pos = 0
  let neg = 0
  let zero = 0
  for (const n of arr) {
    if (n > 0) pos++
    else if (n < 0) neg++
    else zero++
  }
  const posRatio = parseFloat(pos/total).toFixed(6)
  const negRatio = parseFloat(neg/total).toFixed(6)
  const zeroRatio = parseFloat(zero/total).toFixed(6)
  console.log(`${posRatio}\n${negRatio}\n${zeroRatio}`)
}
