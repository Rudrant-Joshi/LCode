// 268. Missing Number
var missingNumber = function(nums) {
    let set = new Set(nums)
    let count=0; let miss=0;
    
    for(let num of nums){
        if(!set.has(0)){
             miss = 0
             break
        }
        
        if(set.has(count+1)) count++

        else {
            miss = count+1
            break
        }
    }
    return miss
};