function solution(number){
  if (number < 0) return 0
  let sum = 0
  for (i=1;i<number;i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i
  }
  return sum
}
