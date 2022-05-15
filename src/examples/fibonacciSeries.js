export function fibonacciSeries(num) {
  // [0, 1, 1, 2, 3, 5, 8, 13, 21]
  const ar = [0, 1];
  for (let i = 2; i < num; i++) {
    ar.push(ar[i - 2] + ar[i - 1]);
  }
  console.log(ar);
  return ar;
}