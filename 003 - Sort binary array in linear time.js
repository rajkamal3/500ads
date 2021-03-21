// Input:  { 1, 0, 1, 0, 1, 0, 0, 1 }
// Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

function sort(arr) {
    let zeros = 0;
    let ones = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++;
        } else if (arr[i] === 1) {
            ones++;
        }
    }

    let arr1 = Array.from({length: zeros}, () => 0);
    let arr2 = Array.from({length: ones}, () => 1);

    return [...arr1, ...arr2];
}

sort([1, 0, 1, 0, 1, 0, 1, 9]);
