export function InitFunction() {
    function flattenArray(input) {
        let flattenedArray = [];
        // Below method also works fine
        const flat = (input) => {
            for(let i = 0; i < input.length; i++) { 
               if(Array.isArray(input[i])) { 
                    flat(input[i]);
               } else {
                    flattenedArray.push(input[i]);
               }
            }
        }
        flat(input);
        ////////////////////////////
        // Another solution without inner method
        // for(let i = 0; i < input.length; i++) {
        //     if(Array.isArray(input[i])) {
        //         flattenedArray.push(...flattenArray(input[i]));
        //     } else {
        //         flattenedArray.push(input[i]);
        //     }
        // }
        return flattenedArray;
    }
    const input = [[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]];
    console.log(flattenArray(input));
}