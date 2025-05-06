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
const getFullName= (person:Employee):string=>person.firstName+" "+person.lastName;

let fullName:string=getFullName(person) //typecast
//Ana
console.log(fullName);
//rest parameter
/* function test(...names:any[]){
    console.log(names);
    
}
test("balaji","sri","dhana","teena") */

