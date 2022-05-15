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

function loadArrSearchIndex() {
    output.innerHTML = "";
    import('./examples/array/arrSearch').then((res)=>{
        res.br_search();
        sourceCode.innerHTML = res.br_search.toString();
    });
}
document.getElementById("arrSearchIndex").addEventListener("click", loadArrSearchIndex, false);

function loadNumRangeRec() {
    output.innerHTML = "";
    import('./examples/array/rangeWithRecursive').then((res)=>{
        res.rangeTest();
        sourceCode.innerHTML = res.rangeTest.toString();
    });
}
document.getElementById("numRangeRec").addEventListener("click", loadNumRangeRec, false);

function loadObserver() {
    output.innerHTML = "";
    import('./examples/patterns/observer').then((res)=>{
        res.ObserverPattern();
        sourceCode.innerHTML = res.ObserverPattern.toString();
    });
}
document.getElementById("observer").addEventListener("click", loadObserver, false);

function loadFactory() {
    output.innerHTML = "";
    import('./examples/patterns/factory').then((res)=>{
        res.FactoryDesignPattern();
        sourceCode.innerHTML = res.FactoryDesignPattern.toString();
    });
}
document.getElementById("factory").addEventListener("click", loadFactory, false);

function loadProtoTest() {
    output.innerHTML = "";
    import('./examples/inheritance/prototypeTest').then((res)=>{
        res.PrototypeTest();
        sourceCode.innerHTML = res.PrototypeTest.toString();
    });
}
document.getElementById("protoTest").addEventListener("click", loadProtoTest, false);
