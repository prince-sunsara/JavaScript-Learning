/*
More useful things
    ● Iterables
    ● Sets
    ● Maps
    ● Object.assign
    ● Optional chaining
*/

/*
    ● ITERABLES
        > those on which we use for of loop (for of loop jinpe lga ske wo.)
        > strings, arrays are iterable
    
    ● ARRAY LIKE OBJECT
        > those who have length property, and who is accessed by index
        > string
*/
// // iterable 
const fname = "PRINCE";
// for(let char of fname){
//     console.log(char);
// }

// // // array like object 
// console.log(fname.length);
// console.log(fname[2]);


/*
    ● SETs
        > is iterable
        > store data
        > also have its own methods
        > no index-based access
        > order is not guaranteed
        > unique items only (no duplications allowed)
*/
// const set = new Set([1,2,3]);
// console.log(set);
// set.add([6,9]) // add element
// console.log(set);
// console.log(set.has(3)); // find element ---> true/false
// for(let x of set){
//     console.log(x);
// }


/*
    ● MAPS
        > an iterable
        > stored data in ordered fashion
        > store key value pair (like object)    
        > duplicate key are not allowed like object

        // difference btw maps objects
        > objects can only have string or symbol as key
        > maps can use anything as key like array, number, string
*/
// // object literals
// // key -> string/symbols
// const person = {
//     name: 'prince',
//     age: 7
// }

const person = new Map();
person.set('fname', 'prince'); // add key-value pair
person.set('age' , 20);
person.set(1 , 'one');
// person.set([1,2,3], 'one two three')
// person.set({1: 'one'}, 'one')
// console.log(person);
// console.log(person.get(1)); // return value of given key
// console.log(person.get('fname'));

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let [key, value] of person){
//     // console.log(key);
//     // console.log(Array.isArray(key));
//     console.log(key, value);
// }

// const person1 = new Map([['fname', 'prince'], ['age',21]]);
// console.log(person1);

// const person1 = {
//     id: 1,
//     fname: 'prince'
// }
// const person2 = {
//     id: 2,
//     fname: 'princess'
// }
// const extraInfo = new Map();
// extraInfo.set(person1, {age:21, gender: 'male'});
// extraInfo.set(person2, {age:19, gender: 'female'});
// console.log(extraInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);


/*
    CLONING USING OBJECT.ASSIGN
        > how to clone object
*/
// const obj = {
//     key1: 'val1',
//     key2: 'val2'
// }
// // const obj2 = {...obj};
// const obj2 = Object.assign({}, obj);
// obj.key3 = "val3";
// console.log(obj);
// console.log(obj2);
    
    
/*
    OPTIONAL CHAINING
        > '?'
        > element is exist ? if yes then go further
*/
const user = {
    fname: 'prince',
    // address: {houseNumber : 12455}
}
console.log(user?.fname);
console.log(user?.address?.houseNumber);