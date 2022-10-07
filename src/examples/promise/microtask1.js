button.addEventListener('click', function(){
    Promise.resolve().then(()=> console.log('Microtask 1'));
    console.log("Listener 1");
});

button.addEventListener('click', function(){
    Promise.resolve().then(()=> console.log('Microtask 2'));
    console.log("Listener 2");
});

// output -> Listener 1 Microtask 1 Listener 2 Microtask 2


button.click();
// output -> Listener 1  Listener 2 Microtask 1 Microtask 2 
// because js stack is not cleared.
// https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=1373s
