
function PrintPrime(num) {
    let isPrime = (n) => {
        let div = 2;
        while(n > div) {
            if(n % div === 0) {
                return false;
            } else {
                div++;
            }
        }
        return true;
    };
    for(let i = 1; i < num; i++) {
        if(isPrime(i)) {
           console.log("Prime ", i);
        }
    }
}
PrintPrime(20);
// call by ref or by value.
function Test(a, b, c){
	a = 20;
	b['b'] =20
	c.push(30);
}
var a = 10;
var b = {a:10};
var c = [10,20];
Test(a,b,c);
console.log(a, b, c);

let arr = [1,3,4,5,6,2,3,5,8,9,6];
console.log([...new Set(arr)]);

