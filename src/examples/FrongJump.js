function FrogJum(X, Y, D) {
    let distanceToJum = Y - X;
    console.log('distanceToJum ', distanceToJum);
    let jumpRequired = distanceToJum / D;
    console.log('jumpRequired ', jumpRequired);
    console.log(distanceToJum % D);
    if(distanceToJum % D != 0 ) {
        jumpRequired++;
    }
    return Math.floor(jumpRequired);
    // 
    // let numOfSteps = 0;
    // for(let jum=X; jum<Y; jum=jum+D) {
    //     numOfSteps++;
    //     console.log(' jum ', jum, numOfSteps)
    // }
    // return numOfSteps;
}
// console.log(solution(1, 5, 2));
// console.log(solution(10, 85, 30));
console.log(FrogJum(3, 999111321, 7));