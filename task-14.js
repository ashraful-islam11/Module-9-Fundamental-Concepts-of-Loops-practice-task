/**
 *  todo:   Task 14 — Mini Challenge 
 *Write a program that:
 * 1. Loops from 1 to 100.
 * 2 .Skips (continue) any number divisible by 5.
 * 3 .Stops (break) completely once it reaches a number greater than 40.
 * 4 .Prints every number that passes both checks.

 */

//  // 1. loops form 1 to 100. 
//  console.log('step 1: loops form 1 to 100');
//  for(let number = 1; number <= 100; number++){
//     console.log(number);
//  }



// // 2. skips (continue) any number divisible by 5. 
// console.log('skips (continue) any number divisible by 5. ');

// let i = 1;

// while ( i <= 100){
//     if( i % 5 === 0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }


// // 3 .Stops (break) completely once it reaches a number greater than 40.

// let num = 1;

// do{
//     if(num  > 40){
       
//         break;
//     }
//     console.log(num);
//     num++;
// }
// while( num <= 100);

// //4 .Prints every number that passes both checks.
// console.log('4 .Prints every number that passes both checks.');

// for ( let n = 1; n <= 40 ; n++){
//       if( n % 5 === 0 &&  n <= 40){
//         continue;
//       }
//       console.log(n);
// }


// main practice:

for( let main = 1; main <= 100; main++){
    
   if( main > 40){
     break;
   }
   if(main  % 5 === 0){
    continue;

   }
   console.log(main);
    
    
}