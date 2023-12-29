/*
VERY IMPORTANT ARRAY METHODS:

    ● Foreach method
    ● Map method
    ● Filter
    ● Reduce
    ● Sort
    ● Find
    ● Every
    ● Some
    ● Fill method
    ● Splice method
*/

const num = [1,2,3,4];

/*
    FOREACH METHOD
        > return value
*/

// function myFun(number, index) {
//     console.log(`index is ${index} and number is ${number}`);    
// }
// num.forEach(myFun)

// num.forEach((number, index) => {
    // // console.log(`index is ${index} and number is ${number}`);    
    // console.log(`${number} x 2 = ${number*2}`);    
// })
    
    
/*
    MAP METHOD
        > return new array
*/

// function sqrt(n){
//     return n*n;
// }
// const sqrtArr = num.map(sqrt)

// const sqrtArr = num.map(e => {
//     return e**2;
// })
// console.log(sqrtArr);

// const users = [
//     {id:2, name:"Prince", gender: 'male'},
//     {id:1, name:"Sapna", gender: 'female'}
// ]
// const userNames = users.map((user) => {
//     return user.name;
// });
// console.log(userNames);



/*
    FILTER METHODS
        > filter any array
        > return true/false
        > if condition is true return its value
*/
// const isEven = (num) => {
    //     return num%2===0;
// }
// const evenNum = num.filter(isEven)
// console.log(evenNum);



/*
    REDUCE METHODS
        > apply calculation on each element of array
        > return single value 
*/
// const sum = num.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })
// console.log(sum)

// const userCart = [
//     {prodectId:1, prodectName: "Samsung A21s", price: 17000},
//     {prodectId:2, prodectName: "Samsung A13", price: 14000},
//     {prodectId:3, prodectName: "Samsung A50", price: 21000},
//     {prodectId:4, prodectName: "Samsung A15", price: 27000},
// ]
// const totalPrice = userCart.reduce((totalPrice, currentProdect) => {
//     return totalPrice + currentProdect.price;
// }, 0); // 0 is initial value
// console.log(`You have to pay ${totalPrice} Rs.`)



/*
    SORT METHOD
        > for string as per asci value it sort the items
*/
// const name = ['prince', 'kashish', 'bindiya']
// const sorted = name.sort();
// console.log(sorted)

// // for numbers you have to do this
// const numbers = [1,5,515,452,4,2,452];
// // const sorted = numbers.sort((a,b) => a-b); // min to max
// const sorted = numbers.sort((a,b) => b-a); // max to min
// console.log(sorted)

// 5 , 4
// a-b ---> positive ---> b, a
// a-b ---> negative ---> a, b
// 4 , 5

// // real life example for amazor low to high price
// const userCart = [
//     {prodectId:1, prodectName: "Samsung A21", price: 17000},
//     {prodectId:2, prodectName: "Samsung A13", price: 14000},
//     {prodectId:3, prodectName: "Samsung A50", price: 21000},
//     {prodectId:4, prodectName: "Samsung A15", price: 27000},
//     {prodectId:5, prodectName: "Samsung S20", price: 70000},
// ]
    
// const lowToHigh = userCart.slice(0).sort((p1, p2) => {
//     return p1.price - p2.price;
// })
// console.log('Low to High Price.....');
// console.log(lowToHigh)

// const highToLow = userCart.slice(0).sort((p1, p2) => {
//     return p2.price - p1.price;
// })
// console.log('High to low price.....');
// console.log(highToLow)
    
    
    
/*
    FIND METHOD
        > Returns the value of the first element in the array where predicate is true, and undefined otherwise
*/
// const myArr = ['hello', 'radhe', 'prince', 'sapna'];
// const result = myArr.find(item => {
//     return item.length === 6;
// });
// console.log(result)

const userCart = [
    {prodectId:1, prodectName: "Samsung A21", price: 17000},
    {prodectId:2, prodectName: "Samsung A13", price: 14000},
    {prodectId:3, prodectName: "Samsung A50", price: 21000},
    {prodectId:4, prodectName: "Samsung A15", price: 27000},
    {prodectId:5, prodectName: "Samsung S20", price: 7000},
];
// const result = userCart.find(item => item.prodectId === 3);
// console.log(result)



/*
    EVERY METHOD
        > Determines whether all the members of an array satisfy the specified test.
        > return true/false 
*/
// const numbers = [2,4,6,8,10];
// const ans = numbers.every(number => number%2 === 0);
// console.log(ans);

// const ans = userCart.every(item => item.price < 30000);
// console.log(ans);



/*
    SOME METHOD
        > Determines whether the specified callback function returns true for any element of an array 
*/
// const ans = userCart.some(item => item.price < 10000);
// console.log(ans);




/*
    FILL METHOD
        > value, start, end
        > Changes all array elements from start to end index to a static value and returns the modified array
*/
// const myArr = new Array(10).fill("P");
// console.log(myArr);

// const myArr = [1,2,3,4,5,6,7,8,9];
// myArr.fill(0, 2, 5)
// console.log(myArr);





/*
    SPLICE METHOD
        > start, delete, insert
*/
const arr = ['item1', 'item2', 'item3'];
// // Delete
// const deletedItem = arr.splice(1,1);
// console.log("deleted item", deletedItem); // deleted item [ 'item2' ]
// console.log(arr); // [ 'item1', 'item3' ]

// // Instert
// arr.splice(1,0, 'inserted1');
// console.log(arr); // [ 'item1', 'inserted1', 'item2', 'item3' ]

// // Delete & Instert
// const deletedItem = arr.splice(1,1, 'inserted1');
// console.log("deleted item", deletedItem);
// console.log(arr); 
