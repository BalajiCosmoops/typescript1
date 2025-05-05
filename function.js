"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    firstName: null,
    lastName: "K",
    age: 20,
    isMajor: true
};
function getFullName(person) {
    var fullName = person.firstName + " " + person.lastName;
    return fullName;
}
var fullName = getFullName(person); //typecast
console.log(fullName);
