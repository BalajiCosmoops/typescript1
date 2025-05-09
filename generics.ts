function identityOne(val:number|boolean): number | boolean{
            return val;
}

function identityTwo(val:any):any{
    return val;
}
function identityThree<type>(val:type):type{
    return val;
}
identityThree("balaji");


interface Bottle{
    brand : string,
    type: number
}

// identityFour<Bootle>({}){   }

function getSearchProduct<T>(product:T[]):T{
    const myIndex=3
    return product[myIndex];
}

const getMoreSearchProduct=<T,>(products:T[]):T=>{
    const myIndex=4;
    return products[myIndex]
}

interface Database{
    connectin :string,
    username:string,
    password:string
}

function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

//anotherFunction(3,{})

interface User{
    user:string,
    age:number,
    email:string
}
//Partial => make all properties optional
//usecase => when updating an object where not all fields are required
type partialUser=Partial<User>
const userDetails=(user:partialUser)=>{
    console.log(user);
}
userDetails({user:"Balaji"})
export {}


interface Details{
    id?:number;
    name?:string;
}


//Required=>mentioning all the fields are required
type strictUser=Required<Details>;

const userDetails1=(des:strictUser)=>{
    console.log(des);
}
//userDetails1({id:52})

type Roles="admin" | "user" | "guest";
type RoleAccess=Record<Roles,boolean>;
/*
{
admin :boolean,
user:boolean,
guest:boolean
}
*/

interface EmployeeDetails{
    employeeID:number;
    employeeName:string;
    email:string;
    password:string;
}



//Omit
type Employee=Omit<EmployeeDetails,"password">;

const Emp=(user:Employee)=>{
    console.log(user);
}
Emp({employeeID:25,employeeName:"Balaji",email:"balaji@gmail.com"})


//pick
interface Person{
    name:string;
    age:number;
    email:string
}
const bob :Pick<Person,"name">={
    name:"Balaji",
}
console.log(bob);


//Exclude

type Primitive=string | number | boolean;
//const Value:Exclude<Primitive,string>=true;
const Value:Exclude<Primitive,string>=20;
//const Value:Exclude<Primitive,string>="Bala";
console.log(typeof Value);
