Input:
arr = [8, 7, 2, 5, 3, 1]
sum = 10
 
Output:
Pair found (8, 2)
or
Pair found (7, 3)
 
 
Input:
arr = [5, 2, 6, 8, 1, 9]
sum = 12
 
Output:
Pair not found

console.clear();

function sum(arr, num) {
    let resCount = 0; 

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                console.log('The pair is ' + [arr[i], arr[j]]);
                resCount++;
            }
        }
    }

    if (resCount === 0) {
        return 'No pairs found!';
    }
}

sum([8, 7, 2, 5, 3, 1], 115);
