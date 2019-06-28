'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    for (var i = 1; i < n; i++) {
        let value = arr[i]
        // store the current item value so it can be placed right
        for (var j = i - 1; j > -1 && arr[j] > value; j--) {
            // loop through the items in the sorted array (the items from the current to the beginning)
            // copy each item to the next one
            arr[j + 1] = arr[j]
        }
        // the last item we've reached should now hold the value of the currently sorted item
        arr[j + 1] = value
        console.log(arr.join(" "));
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
