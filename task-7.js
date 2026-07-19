/**
 * todo:        Task 7 — Multiplication Table 
 * Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.   */

let table =7;
for( let number = 1; number <= 10 ; number++){
    console.log( table , 'X', number, "=", table * number);
}