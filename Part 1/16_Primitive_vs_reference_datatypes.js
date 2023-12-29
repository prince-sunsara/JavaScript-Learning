/*
    PREMITIVE VS REFERENCE DATATYPES
        > premitive
            > element's value stored in stack
            > each element have memory location to store their value
            > perform operation for perticuller value

        > reference
            > element's value stored in heap
            > if two element have same value (bellow arr1, arr2) then it gives same memeory location where this value is stored
            > perform operation for evely value 

*/

let num1 = 6; // value is stored at 01 location
let num2 = num1; // value is stored at 02 location
console.log('value of num1 is', num1)
console.log('value of num2 is', num2)
num1++;
console.log("after increment")
console.log('value of num1 is', num1)
console.log('value of num2 is', num2)

let arr1 = [1,2,3,4,5];
let arr2 = arr1;
console.log('value of arr1 is', arr1)
console.log('value of arr2 is', arr2)
arr1.pop();
console.log("after popping")
console.log('value of arr1 is', arr1)
console.log('value of arr2 is', arr2)

/*
in short, 

PREMITIVE:
    > premitive type stored element&value for each element in stack.
    > num1 and num2 even if both have same value they stored in different location

REFERENCE:
    > meanwhile, reference type stored element in stack and their value in heap, if any new element have value which is already stored in heap then it gives address to that location 
    > arr1 and arr2 use value stored in same location
    
    > let arr1 = [1,2,3]
    > let arr2 = arr1
    > if you perform operation on arr1 it affect arr2


NOTE: 
    > let arr1 = [1,2,3]
    > let arr2 = [1,2,3]
    > if you create two arrays with same value like this then it will stored value at different locaion (like premitive) so now if you do operation on arr1 it won't affect on arr2
*/