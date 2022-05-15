export function Test(n) {
  console.log("Test Function called ", n);
  // [0, 1, 1, 2, 3, 5, 8, 13, 21]
  const ar = [0, 1];
  for (let i = 2; i < n; i++) {
    ar.push(ar[i - 2] + ar[i - 1]);
  }
  console.log(ar);
}
