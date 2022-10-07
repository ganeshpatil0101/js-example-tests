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

function PromiseTest1() {
  return new Promise((res, rej) => {
    res("Test");
  });
}

//File 1
PromiseTest1().then( (response) => {
  console.log(" then 1 => ", response);
  return `${response}-Updated`;
}).then((res) => {
  console.log(' then 2 => ', res);
});

//File 2
PromiseTest1().then((response)=>{
  console.log(" then 3 => ", response);
  return response;
}).then((res) => {
  console.log(" then 3.1 => ", res);
  return `${res}-3.1-updated`;
}).then((res) => {
  console.log(" then 3.2 => ", res);
  return `${res}-3.2-updated`;
});

//File 3
PromiseTest1().then((response)=>{
  console.log(" then 4 => ", response);
});