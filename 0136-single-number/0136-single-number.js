// var singleNumber = function(nums) {
//     let map = new Map();

//     for(let num of nums){
//         if(map.has(num)) 
//             map.set(num, map.get(num)+1)

//         else map.set(num, 1)    
//     }

//     for(let [key, value] of map){
//         if(value === 1) return key
//     }
// };


var singleNumber = function(nums) {
    let ans = 0;

    for(let num of nums)
        ans = ans ^ num; 

    return ans;
};