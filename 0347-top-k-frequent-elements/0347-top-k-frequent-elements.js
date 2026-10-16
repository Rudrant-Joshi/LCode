var topKFrequent = function(nums, k) {
    let  map = new Map();

    for(let num of nums){
        if(map.has(num))  map.set(num, map.get(num)+1)
        else map.set(num, 1)
    }
        return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0]);
};
