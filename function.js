"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    firstName: null,
    lastName: "K",
    age: 20,
    isMajor: true
};
var getFullName = function (person) { return person.firstName + " " + person.lastName; };
var fullName = getFullName(person); //typecast
//Ana
console.log(fullName);
//rest parameter
/* function test(...names:any[]){
    console.log(names);
    
}
test("balaji","sri","dhana","teena") */
