var duplicateZeros = function(arr) {
    let a = new Array(arr.length).fill(0);
    let j = 0;

    for(let i = 0; i < arr.length; i++){
        if(j >= arr.length) break;

        if(arr[i] === 0){
            a[j] = 0;

            if(j + 1 < arr.length)  a[j+1] = 0;
            
            j += 2;
        }

        else{
            a[j] = arr[i];
            j++;
        }
    }

    for(let i=0; i<arr.length; i++){
        arr[i]=a[i]
    }
    
}