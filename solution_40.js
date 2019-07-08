'use strict';

const fs = require('fs');

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

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    let result = 0,
        length = ar.length;

    for (let i = 0; i < length; i++) {
        if (result === 0) {
            result += ar[0];
        } else {
            let num1 = result.toString().split('');
            let num2 = ar[i].toString().split('');

            num1 = num1.map(function (num) {
                return parseInt(num, 10);
            });

            num2 = num2.map(function (num) {
                return parseInt(num, 10);
            });

            if (num2.length > num1.length) {
                result = _add(num2, num1);
            } else {
                result = _add(num1, num2);
            }
        }
    }

    function _add(num1, num2) {
        var num1_idx = num1.length-1;
        var num2_idx = num2.length-1;
        var remainder = 0;

        for (; num1_idx > -1; num1_idx--, num2_idx--) {
            var sum = num1[num1_idx] + remainder;

            if (num2_idx > -1) {
                sum += num2[num2_idx];
            }

            if (sum <= 9 || num1_idx === 0) {
                remainder = 0;
                num1[num1_idx] = sum;
            } else if (sum >= 10) {
                remainder = 1;
                num1[num1_idx] = sum - 10;
            }

        }

        return num1.join('');
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = aVeryBigSum(ar);

    ws.write(result + "\n");

    ws.end();
}

