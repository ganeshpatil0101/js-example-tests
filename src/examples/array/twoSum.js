function twoSum(nums, target) {
    // for(let i=0;i<nums.length; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         if(nums[i]+nums[j] === target) {
    //             return [i, j];    
    //         }
    //     }
    // }
    let comp = {};
    for(let i=0; i<nums.length; i++) {
        if(comp[nums[i]] >= 0) {
            console.log(comp);
            return [comp[nums[i]], i]   
        }
        comp[target - nums[i]] = i
    }
};

console.log(twoSum([2, 7, 6, 1, 4], 10));

