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

// Complete the squares function below.
function squares(a, b) {
    let leftBorder = Math.sqrt(a);
    leftBorder = Number.isInteger(leftBorder) ? leftBorder : Math.ceil(leftBorder);

    let rightBorder = Math.sqrt(b);
    rightBorder = Number.isInteger(rightBorder) ? rightBorder : Math.floor(rightBorder);

    return rightBorder - leftBorder + 1;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const ab = readLine().split(' ');

        const a = parseInt(ab[0], 10);

        const b = parseInt(ab[1], 10);

        let result = squares(a, b);

        ws.write(result + "\n");
    }

    ws.end();
}

