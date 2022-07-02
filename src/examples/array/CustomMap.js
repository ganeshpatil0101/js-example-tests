export function InitFunction() {
    const CustomMap = (arr, callback) => { 
        let res = [];
        const loop = function(index, arr) {
            if(index === arr.length) {
                return 0
            } else {
                res.push(callback(arr[index]));
                index = index + 1;
                loop(index, arr)
            }
        }
        loop(0, arr);
        return res;
    }
    const Loop = (ele) => {
        return ele * 2;
    }
    const arr = [20, 30, 40, 50, 100];
    console.log(CustomMap(arr, Loop));
}