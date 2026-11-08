var thirdMax = function(nums) {
    let set = new Set(nums);
    set = [...set].sort((a,b) => b-a);

    if(set.length < 3) return set[0];
    else return set[2];
}