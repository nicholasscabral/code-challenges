function FirstFactorial(num) { 
  // code goes here
  let prod = num
  while (true) {
    if (num == 1) break
    num--
    prod *= num
  }
  return prod
}
   
// keep this function call here 
console.log(FirstFactorial(readline()));
