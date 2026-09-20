var numRescueBoats = function(people, limit) {

    people.sort((a, b) => a - b);

    let first = 0
    let last = people.length-1;
    let boat = 0;

    while(first <= last){
        if(people[first]+people[last] <= limit){
            first++;
            last--;
        }
        else{
            last--
        }
        boat++;
    }
    return boat
};
