/**
 * todo                 Task 10 — Using Break 
 *          Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30. */

// for loop :
console.log('if number is greater than 30 ,than break for loop:');
for( let number = 1; number <= 50; number++){
    if( number > 30){
        break;
    }
    console.log(number);
}


// while loop:
console.log('if number is greater than 30 ,than break while loop:');

let num = 1;

while(num>= 50){
    if(num > 30){
        break;
    }
    console.log(num);
    num++;
}
