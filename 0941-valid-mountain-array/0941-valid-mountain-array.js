var validMountainArray = function(arr) {
    if(arr.length < 3) return false;

    let peak = 0;

   for(let i = 0; i < arr.length-1; i++){
      if(arr[i] > arr[i+1]){
         peak = i;
         break;
      }
   }

   if(peak === 0 || peak === arr.length-1) return false;

   // Check increasing part
   for(let i = 0; i < peak; i++){
      if(arr[i] >= arr[i+1]) return false;
   }

   // Check decreasing part
   for(let i = peak; i < arr.length-1; i++){
      if(arr[i] <= arr[i+1]) return false;
   }

   return true;
};