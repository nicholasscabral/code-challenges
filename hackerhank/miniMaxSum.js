function miniMaxSum(arr) {
  // Write your code here
  const sums = []
  let el, sum
  arr.sort((a,b) => a-b)
  for (let i = 0; i < arr.length; i++) {
    el = arr[i]
    arr.splice(i,1)
    sum = arr.reduce((x,y) => x+y)
    sums.push(sum)
    arr.push(el)
    arr.sort((a,b) => a-b)
  }
  const max = Math.max(...sums)
  const min = Math.min(...sums)
  console.log(`${min} ${max}`)
} 
