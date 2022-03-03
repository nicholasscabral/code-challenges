function staircase(n) {
  // Write your code here
  let stairCase = ''
  for(let i = 1; i <= n; i++) {
    let lineStr = ''
    
    // spaces to add
    const spaces = n - i
    for (let j = 1; j <= spaces; j++) {
      lineStr += ' '
    }
    
    // # to add
    const charQuant = n - spaces
    for (let x = 1; x <= charQuant; x++) {
      lineStr += '#'
    }
    
    stairCase += lineStr + '\n'
  } 
  console.log(stairCase)
}
