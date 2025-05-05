/* import { Employee } from "./employee.type";
const person:Employee={
    name:"Balaji",
    age:20,
    isMajor:true,
};

function printPersonName(name:string="Default Name",age?:number,isMajor?:boolean):void{
    console.log(name);
    console.log(age);
    console.log(isMajor);
}
printPersonName("Balaji",undefined,true); */
import { Employee } from "./employee.type"

const person:Employee={
    firstName: null,
    lastName: "K",
    age:20,
    isMajor:true
};
function getFullName(person:Employee):string{
    const fullName=person.firstName+" "+person.lastName;
    return fullName;
}
let fullName:string=getFullName(person) //typecast

console.log(fullName);
