/*
OBJECT DESTRUCTURING
*/

// const band = {
//     bandname: 'sem work',
//     famousSong: 'animal'
// }

// const {bandname, famousSong} = band;
// console.log(famousSong)


/*
NESTED DESTRUCTURING
*/
const users = [
    {id:2, fname:"Prince", gender: 'male'},
    {id:1, fname:"Sapna", gender: 'female'}
]
const [{gender: user1gender},{fname}] = users;
console.log(user1gender)
console.log(fname)