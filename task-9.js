/**
 * todo:            Task 9 — Sum of Even Numbers
 *              Write a for loop that calculates the sum of all even numbers from 2 to 50.      */

console.log('calculate of sum of for loop:');
let sum = 0;
for( let num = 2 ; num <= 50 ; num++){
      if(num % 2 === 0){
         sum +=num;
         console.log( sum );
      }
}

console.log('calculate of sum or while loop:');

let sumCalculate = 0;
let number = 2;

while(number <= 50){
     if(number % 2 === 0){
        sumCalculate +=number;
        console.log(sumCalculate);
     }
    number++;

}