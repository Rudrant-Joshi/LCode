var reverseWords = function(s) {

    let arr = s.split(" ");
    arr = arr.reverse();
    arr = arr.filter((word) => word !== "");
    
    return  arr.join(" ")
};