/* 
WHILE LOOP:
    > reapet block of code for any condition
    > used when iteration is known
*/

// // print 1 to 10
// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i);
// }

// // sum from 0 to 10
// let sum = 0;
// let j = 0;
// while (j <= 10) {
//     sum += j;
//     j++;
// }


/* 
FOR LOOP:
    > reapet block of code for any condition
    > if iteration is not known
*/
// // table of 5
// for(let i = 1; i<=10; i++){
//     console.log(`5 x ${i} = ` + 5*i);
// }

// // sum from 0 to 10
// let sum = 0;
// for(let i=0; i<=10; i++){
//     sum += i;
// }
// console.log(sum);


/* 
DO-WHILE LOOP:
    > reapet block of code for any condition
    > run atleast one
*/
let i = 10;
do{
    console.log(i);
    i++;
} while( i < 10);

console.log("value of i ", i);
