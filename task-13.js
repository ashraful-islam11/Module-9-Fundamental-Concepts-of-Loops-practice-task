/**
 *  todo:           Task 13 — Comparing Loop Types
 * Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.      */

// 1. for loops : 
console.log('for loops : ');
for(let num = 1; num <= 5; num ++){
    console.log(num);
}

// 2. while loops :
console.log('while loop :');
let number = 1; 
while( number <= 5){
    console.log(number);
    number++;
}

console.log('do while loop');
let i = 1 ;
do {
    console.log(i);
    i++;
}while(i <= 5);