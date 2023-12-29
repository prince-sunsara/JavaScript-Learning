export default class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    info() {
        console.log(this.fname, this.lname, this.age)
    }
}

// // // A module cannot have multiple default exports
// // Error : Duplicate export of 'default'
// export default class Person2 {
//     constructor(fname, lname, age) {
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }
//     info() {
//         console.log(this.fname, this.lname, this.age)
//     }
// }

// // // A module can have multiple exports
export class Person2 {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    info() {
        console.log(this.fname, this.lname, this.age)
    }
}
