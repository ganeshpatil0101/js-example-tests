import "./styles.css";
import { Test } from "./examples/example1/example1";
let output = document.getElementById("console");
let sourceCode = document.getElementById("sourceCode");
const originalLogFun = console.log;
let refScrollCb = null;
let refKeyUpCb = null;
function cleanUp() {
    output.innerHTML = "";
    if(refScrollCb) {
        document.removeEventListener("scroll", refScrollCb);
        refScrollCb = null;
    }
    if(refKeyUpCb) {
        document.removeEventListener("keyup", refKeyUpCb);
        refKeyUpCb = null;
    }
}
console.log = (msg) => {
    output.innerHTML += "<br/>"+msg;
    originalLogFun(msg);
}

function loadPromiseTest() {
    cleanUp()
    import('./examples/promise/promiseTest').then((res)=>{
        res.PromiseTest();
        sourceCode.innerHTML = res.PromiseTest.toString();
    })
}
document.getElementById("promiseTest").addEventListener("click", loadPromiseTest, false);


function loadFibo() {
    cleanUp();
    import('./examples/fibonacciSeries').then((res)=>{
        res.fibonacciSeries(9);
        sourceCode.innerHTML = res.fibonacciSeries.toString();
    });
}
document.getElementById("fibo").addEventListener("click", loadFibo, false);

function loadArrSearchIndex() {
    cleanUp();
    import('./examples/array/arrSearch').then((res)=>{
        res.br_search();
        sourceCode.innerHTML = res.br_search.toString();
    });
}
document.getElementById("arrSearchIndex").addEventListener("click", loadArrSearchIndex, false);

function loadCustomMap() {
    cleanUp();
    import('./examples/array/CustomMap').then((res)=>{
        res.InitFunction();
        sourceCode.innerHTML = res.InitFunction.toString();
    });
}
document.getElementById("customMap").addEventListener("click", loadCustomMap, false);

function loadFlattenArray() {
    cleanUp();
    import('./examples/array/flattenArray').then((res)=>{
        res.InitFunction();
        sourceCode.innerHTML = res.InitFunction.toString();
    });
}
document.getElementById("flattenArray").addEventListener("click", loadFlattenArray, false);

function loadNumRangeRec() {
    cleanUp();
    import('./examples/array/rangeWithRecursive').then((res)=>{
        res.rangeTest();
        sourceCode.innerHTML = res.rangeTest.toString();
    });
}
document.getElementById("numRangeRec").addEventListener("click", loadNumRangeRec, false);

function loadObserver() {
    cleanUp();
    import('./examples/patterns/observer').then((res)=>{
        res.ObserverPattern();
        sourceCode.innerHTML = res.ObserverPattern.toString();
    });
}
document.getElementById("observer").addEventListener("click", loadObserver, false);

function loadFactory() {
    cleanUp();
    import('./examples/patterns/factory').then((res)=>{
        res.FactoryDesignPattern();
        sourceCode.innerHTML = res.FactoryDesignPattern.toString();
    });
}
document.getElementById("factory").addEventListener("click", loadFactory, false);

function loadProtoTest() {
    cleanUp();
    import('./examples/inheritance/prototypeTest').then((res)=>{
        res.PrototypeTest();
        sourceCode.innerHTML = res.PrototypeTest.toString();
    });
}
document.getElementById("protoTest").addEventListener("click", loadProtoTest, false);

function loadThrottling() {
    cleanUp();
    import('./examples/throttling/index').then((res)=>{
        refScrollCb = res.Throttling();
        sourceCode.innerHTML = res.Throttling.toString();
    });
}
document.getElementById("throttling").addEventListener("click", loadThrottling, false);

function loadDebouning() {
    cleanUp();
    import('./examples/debouncing/index').then((res)=>{
        refKeyUpCb = res.DebounceTest();
        sourceCode.innerHTML = res.DebounceTest.toString();
    });
}
document.getElementById("debouncing").addEventListener("click", loadDebouning, false);

function loadEventSource() {
    cleanUp();
    window.location = 'eventsource/example.html';
}
document.getElementById("eventSource").addEventListener("click", loadEventSource, false);
