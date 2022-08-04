function birthdayCakeCandles(candles) {
  // Write your code here
  let tallest = Number.MIN_SAFE_INTEGER;
  let tallestQuantity = 1; // for sure there is at least one max element
  for (const unit of candles) {
    if (unit > tallest) {
      tallest = unit;
      continue;
    }
    if (unit == tallest) tallestQuantity++;
  }
  return tallestQuantity;
}

console.log(birthdayCakeCandles([1, 3, 9, 9, 5, 2, 7, 7, 7])); // 2
