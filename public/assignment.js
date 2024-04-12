"use strict";
var readlineSync = require('readline-sync');
let arr = [];
let limit = parseInt(readlineSync.question("enter a limit : "));
function sample(cb) {
    for (let i = 0; i < limit; i++) {
        arr.push(parseInt(readlineSync.question("enter values in index" + i + ' :')));
    }
    console.log(callback(arr));
}
function callback(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum % 2 === 0;
}
sample(callback);
