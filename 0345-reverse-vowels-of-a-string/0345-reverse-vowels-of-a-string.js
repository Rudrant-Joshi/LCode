var reverseVowels = function(s) {

    let arr = s.split("");

    let start = 0;
    let end = arr.length - 1;

    let vowels = "aeiouAEIOU";

    while (start < end) {

        while (start < end && !vowels.includes(arr[start]))   start++;
        
        while (start < end && !vowels.includes(arr[end]))     end--;

        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr.join("");
};