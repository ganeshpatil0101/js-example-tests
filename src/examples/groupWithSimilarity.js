function groupWithSimilarity(words) {
    let ob = {}; let result = [];
    for(let i = 0; i < words.length; i++) {
        const actualWord = words[i];
        const sortedWord = actualWord.split('').sort().join('');
        if(!ob[sortedWord]) {
            ob[sortedWord] = [actualWord];
        } else {
            ob[sortedWord].push(actualWord);
        }
    }
    const keys = Object.keys(ob);
    for(let i = 0; i <keys.length; i++) {
        result.push(ob[keys[i]]);
    }
    return result;
}

let words = ['abc','bac','pqrt','xyz', 'cab', 'trqp','abdc','rtpq'];
console.log(groupWithSimilarity(words));
// output
// [[ 'abc', 'bac', 'cab' ], [ 'pqrt', 'trqp', 'rtpq' ], [ 'xyz' ], [ 'abdc' ] ]