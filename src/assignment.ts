var readlineSync = require('readline-sync')

let size:number = readlineSync.question('Enter the size of the arrays :');
let array1:number[][] = []
let array2:number[][] = []
 console.log("enter the values to the array 1")
for(let i:number = 0; i < size; i++) {
  array1[i] = []
  for(let j:number = 0; j < size;j++) {
        array1[i][j] = parseInt(readlineSync.question('value : '));
  }
}

console.log("enter the values to the array 2")
for(let i:number = 0; i < size; i++) {
  array1[i] = []
  for(let j:number = 0; j < size;j++) {
        array1[i][j] = parseInt(readlineSync.question('value : '));
  }
}

console.log(array1);

