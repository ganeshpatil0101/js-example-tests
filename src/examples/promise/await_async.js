function after5s(x) {
    return new Promise(res => {
        setTimeout(()=> {
            res(x)
        }, 2000);
    });
}
async function mult(input) {
    const f = await after5s(3);
    const g = await after5s(4);
    return input * f * g;
}
mult(2).then(value => {console.log(value)});
async function second_mult(input) {
    const f = after5s(3);
    const g = after5s(4);
    return input * await f * await g;
}
second_mult(2).then(value => {console.log(value)});