function PromiseTest() {
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

// File 1 - Implementation 
let cachedData = {};
function getUserAccess() {
  if(Object.keys(cachedData).length > 0) {
    return Promise.resolve(cachedData);
  }
  return new Promise((resolve, rej) => {
    const mockedResponse = {entitlments:[{original:1}]}; 
    cachedData = {...mockedResponse};
    resolve(mockedResponse);
  });
}

//File 1
getUserAccess().then( (response) => {
  console.log(" File 1 -> then 1 => ", response);
  response['parsedData'] = {'original':3}
  return response;
}).then((res) => {
  console.log(' File 2 -> then 2 => ', res);
});

//File 2
getUserAccess().then((response)=>{
  console.log(" File 2 -> then 1 => ", response);
  return response;
}).then((res) => {
  console.log("  File 2 -> then 2 => ", res);
  res['parsedData'] = { original:1 };
  return res;
}).then((res) => {
  console.log("  File 2 -> then 3 => ", res);
  res['parsedData'] = {original:2};
  return res;
}).then((res) => {
  console.log("  File 2 -> then 4 => ", res);
});


//File 3
getUserAccess().then((response)=>{
  console.log(" File 3 ->  then 1 => ", response);
});
