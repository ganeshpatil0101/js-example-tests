export function PromiseTest() {
  let p1 = new Promise((res, rej) => {
    setTimeout(() => {
      res("Data");
    }, 100);
  });
  p1.then((data) => {
    console.log(data);
    return data + " - update";
  })
    .then((d) => {
      console.log(d);
      return d + " - updated 2";
    })
    .then((d) => console.log(d));
}
