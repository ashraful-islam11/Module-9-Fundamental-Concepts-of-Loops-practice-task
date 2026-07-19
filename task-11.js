/**
 * todo:            Task 11 — Using Continue 
 *      Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.      */


// for loop : 
console.log('divisible 4 of for loop: ');
for(let num = 1 ;  num <= 20;  num++){
    if( num  %  4  ===   0 ){
        continue;
    }

    console.log(num);
}



// while loop : 
console.log('divisible 4 of while loop: ');
let number = 1;

while ( number <= 20 ){
    if( number   %     4   ===  0 ){
         number++;
        continue;
    }
    console.log(number);
    number++;
}