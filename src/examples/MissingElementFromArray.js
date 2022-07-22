function MissingElementFromArray(A) {
    const calculateTotalBetween = (min, max) => {
        const n = (max - min) + 1;
        const total = n * (min + max) / 2;
        return total;
    }
    if(A.length === 0) {
        return 1;
    } else {
        const actualTotalSum = calculateTotalBetween(1, A.length+1);
        const arrTotal = A.reduce((prev, next)=> prev+next, 0);
        let missingNum = actualTotalSum - arrTotal;
        return missingNum;    
    }
}
console.log('===> ', MissingElementFromArray([2, 3, 1, 5]));
