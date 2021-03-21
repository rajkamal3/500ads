// Input:  { 1, 2, 3, 4, 4 }
// Output: The duplicate element is 4

// Input:  { 1, 2, 3, 4, 2 }
// Output: The duplicate element is 2

function duplicate(arr) {
    let counter = {};

    for (let i = 0; i < arr.length; i++) {
        counter[arr[i]] ? counter[arr[i]]++ : counter[arr[i]] = 1;
    }

    for (duplicate in counter) {
        if (counter[duplicate] > 1) {
            console.log('The duplicate is ' + duplicate);
        }
    }
}

duplicate([1, 2, 2, 3, 4]);
