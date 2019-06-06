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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let arrTime = s.split(":"),
        length = arrTime.length,
        hours = parseInt(arrTime[0], 10),
        seconds = parseInt(arrTime[length - 1], 10),
        PM = arrTime[length - 1].indexOf("PM") !== -1;

    if (PM) {
        if (hours !== 12) {
            hours += 12;
        }

        arrTime[0] = String(hours);

    } else {
        if (hours === 12) {
            arrTime[0] = "00";
        }

        if (hours < 10) {
            arrTime[0] = "0" + hours;
        }
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    arrTime[length - 1] = seconds;

    return arrTime.join(':');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}

