import "./styles.css";
import { Test } from "./examples/example1/example1";
let output = document.getElementById("console");
let sourceCode = document.getElementById("sourceCode");
const originalLogFun = console.log;
console.log = (msg) => {
    output.innerHTML += "<br/>"+msg;
    originalLogFun(msg);
}

function loadPromiseTest() {
    output.innerHTML = "";
    import('./examples/promise/promiseTest').then((res)=>{
        res.PromiseTest();
        sourceCode.innerHTML = res.PromiseTest.toString();
    })
}
document.getElementById("promiseTest").addEventListener("click", loadPromiseTest, false);


function loadFibo() {
    output.innerHTML = "";
    import('./examples/fibonacciSeries').then((res)=>{
        res.fibonacciSeries(9);
        sourceCode.innerHTML = res.fibonacciSeries.toString();
    });
}
document.getElementById("fibo").addEventListener("click", loadFibo, false);
