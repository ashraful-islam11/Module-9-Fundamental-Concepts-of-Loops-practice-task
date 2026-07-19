// todo:    Task 5 — Even Numbers 

// Write a for loop that prints all even numbers between 1 and 30.
console.log('event number of for loop :');
 for(let even = 0; even <= 30 ; even+=2 ){
    console.log(even);
}


 console.log('even number of while loop: ');
let isEven = 1;
while(isEven <= 30){
    if( isEven % 2 === 0){
        console.log(isEven);
    }
    isEven++; 
}