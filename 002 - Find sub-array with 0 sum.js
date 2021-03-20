// Input:  { 4, 2, -3, -1, 0, 4 }
 
// Subarrays with zero-sum are:
// { -3, -1, 0, 4 }
// { 0 }
 
 
// Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
 
// Subarrays with zero-sum are:
// { 3, 4, -7 }
// { 4, -7, 3 }
// { -7, 3, 1, 3 }
// { 3, 1, -4 }
// { 3, 1, 3, 1, -4, -2, -2 }
// { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

function subSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            // console.log(arr[i], arr[j]);
            sum += arr[j];
            
            if (sum === 0) {
                console.log("Subarray [" + i + ", " + j + "]");
                console.log(arr.slice(i, j + 1));
            }
        }
    }
}

subSum([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]);
