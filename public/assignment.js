"use strict";
var readlineSync = require('readline-sync');
let size = readlineSync.question('Enter the size of the arrays :');
let array1 = [];
let array2 = [];
console.log("enter the values to the array1");
for (let i = 0; i < size; i++) {
    array1[i] = [];
    for (let j = 0; j < size; j++) {
        array1[i][j] = parseInt(readlineSync.question('value : '));
    }
}
console.log(array1);
