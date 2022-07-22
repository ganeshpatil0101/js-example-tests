function superDigit(n, k) {
    let p = new Array(k).fill(n).join('');
    const calTotal = (sn) => {
        const ar = sn.split('');
        return ar.reduce((prev, next ) => { return prev + parseInt(next)}, 0);
    }
    const recursive = (stringNum) => {
        if(stringNum.length === 1) {
            return parseInt(stringNum)
        }
        return recursive(calTotal(stringNum).toString())
    }
    return recursive(p);
}