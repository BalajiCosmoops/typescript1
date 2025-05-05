"use strict";
/* let age:number=10;
let employeeName:string='Balaji';
let isMajor:boolean=true;

let subject: string[] =["Maths","Biology"]

let employyeeDetails:{name:string,
    age:number,
    isMajor:boolean
}={
    name: 'Balaji',
    age:20,
    isMajor: false
}
console.log(employyeeDetails);
 */
Object.defineProperty(exports, "__esModule", { value: true });
var employes = [
    { age: undefined, isMajor: true },
    { age: 20, isMajor: null }
];
//let newEmployee=employes as Employee[];
var newEmployee = employes;
if (newEmployee[0].name) {
    console.log(newEmployee[0].name);
}
