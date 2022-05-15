export function rangeTest() {
    let range = function (start, end) {
        if(end - start === 2) {
            return [start + 1];
        } else {
            var list = range(start, end - 1);
            list.push(end-1);
            return list;
        }
    }
    console.log('Range start to end number with recursive function');
    console.log(` range(2, 9) => ${range(2, 9)}`);
};