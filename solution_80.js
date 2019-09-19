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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let len = s.length,
        countOfStr = n % len,
        countOfSubstr = Math.floor(n / len),
        numOfLet = 0;

    for (let i = 0; i < len; i++) {
        if (s[i] === 'a') {
            numOfLet++;
        }
    }

    if (countOfStr === 0) {
        return numOfLet * countOfSubstr;
    } else {
        let substr = s.substring(0, countOfStr);
        let addLet = 0;

        for (let i = 0; i < substr.length; i++) {
            if (substr[i] === 'a') {
                addLet++;
            }
        }
        return numOfLet * countOfSubstr + addLet;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}

