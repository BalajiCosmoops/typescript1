"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    firstName: null,
    lastName: "K",
    age: 20,
    isMajor: true
};
const getFullName = (person) => person.firstName + " " + person.lastName;
let fullName = getFullName(person); //typecast
//Ana
console.log(fullName);
//rest parameter
/* function test(...names:any[]){
    console.log(names);
    
}
test("balaji","sri","dhana","teena") */
