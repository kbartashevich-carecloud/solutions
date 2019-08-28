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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let min = 0,
        max = 0,
        length = arr.length,
        sortedArr = arr.sort((a,b) => a - b),
        sumOfMiddle = sortedArr[1];

    for (let i = 2; i < 4; i++) {
        let num1 = sortedArr[i].toString().split("").map((el) => parseInt(el, 10));
        let num2 = sumOfMiddle.toString().split("").map((el) => parseInt(el, 10));

        if (num1.length > num2.length) {
            sumOfMiddle = _add(num1, num2);
        } else {
            sumOfMiddle = _add(num2, num1);
        }

    }


    let first = sortedArr[0].toString().split("").map((el) => parseInt(el, 10));
    let last = sortedArr[4].toString().split("").map((el) => parseInt(el, 10));

    let sum = sumOfMiddle.toString().split("").map((el) => parseInt(el, 10));

    min = (first.length > sum.length) ? _add(first, sum) : _add(sum, first);
    max = (last.length > sum.length) ? _add(last, sum) : _add(sum, last);



    function _add(num01, num02) {
        let num1 = [...num01];
        let num2 = [...num02];
        let idx1 = num1.length - 1,
            idx2 = num2.length - 1,
            remainder = 0;

        for (; idx1 > -1; idx1--, idx2--) {
            let sum = remainder + num1[idx1];

            if (idx2 > -1) {
                sum += num2[idx2];
            }

            if (sum <= 9 || idx1 === 0) {
                remainder = 0;
                num1[idx1] = sum;
            } else if (sum >= 10) {
                remainder = 1;
                num1[idx1] = sum - 10;
            }
        }

        return num1.join("");
    }

    console.log(min + " " + max);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

