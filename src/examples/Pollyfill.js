// pollyfile for reduce
function myReduce(array, callback, start = 0) {
    let current = start;
    for(let element of array) {
        current = callback(current, element);
    }
    return current;
}
console.log(myReduce([1,2,3,4], (pre, next) => pre+next, 0));

function myFilter(array, test) {
    let passedElements = [];
    for(let element of array) {
        if(test(element)) {
            passedElements.push(element);
        }
    }
    return passedElements;
}
console.log(myFilter([1,2,null, false, 4, 5], (el) => el > 2));


