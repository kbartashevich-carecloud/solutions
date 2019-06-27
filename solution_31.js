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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    let sortedVal = arr[n - 1];

    for (let i = n - 2; i > -1; i--) {
        if (sortedVal < arr[i]) {
            arr[i + 1] = arr[i];

            console.log(arr.join(" "));
        } else {
            arr[i + 1] = sortedVal;
            break;
        }

        if (i === 0) {
            arr[i] = sortedVal;
        }
    }

    console.log(arr.join(" "));

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}

