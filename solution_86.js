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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let length = arr.length,
        zero = 0,
        plus = 0,
        minus = 0;

    for (let i = 0; i < length; i++) {
        const el = arr[i];

        if (el < 0) {
            minus++;
        } else if (el > 0) {
            plus++;
        } else {
            zero++;
        }
    }
    let pl = (plus !== 0) ? plus/length : 0;
    let mn = (minus!== 0) ? minus/length : 0;
    let zr = (zero !== 0) ? zero/length : 0;

    console.log(pl.toFixed(6));
    console.log(mn.toFixed(6));
    console.log(zr.toFixed(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

