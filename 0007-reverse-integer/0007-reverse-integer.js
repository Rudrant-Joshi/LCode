var reverse = function(x) {
    let arr = x.toString().split('');
    let start = arr[0] === '-' ? 1 : 0;

    for(let i=start; i<(arr.length+start)/2; i++){
        let last = arr.length-1-(i-start);

        let temp = arr[i];
        arr[i] = arr[last];
        arr[last] = temp;
    }

    let result = parseInt(arr.join(''));

    if(result< -2147483648 ||result>2147483648) return 0;

    return result;
};