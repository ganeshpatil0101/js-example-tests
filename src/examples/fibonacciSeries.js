export function fibonacciSeries(num) {
  // [0, 1, 1, 2, 3, 5, 8, 13, 21]
  const ar = [0, 1];
  for (let i = 2; i < num; i++) {
    ar.push(ar[i - 2] + ar[i - 1]);
  }
  console.log(ar);
  return ar;
}

// function fibo(n) {
//   if(n === 1) return [0, 1];
//   else {
//       let s = fibo(n-1);
//       s.push(s[s.length - 1]+s[s.length - 2]);
//       return s;
//   }
// }
// console.log(fibo(5))