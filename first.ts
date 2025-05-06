/* let greetings:string='Hello Balaji';
console.log(greetings);

//number
let userId=31452;
//userId="Balaji"

//boolean 
let isLoggedIn:boolean=false;

let hero:string;

function getHero(){
    return "Balji";
}

hero=getHero();
export {} */

function addTwo(num:number) {
  //return num + 2;
  return "Hello";
}

function toUpper(val:string){
    return val.toUpperCase();
}
let login=(name:string,email:string,isPaid:boolean=false)=>{}
function signUp(name:string,email:string,isPaid:boolean=false){}
let myVal=addTwo(5);
toUpper("Balaji");
signUp("Balaji","balaji@12",true)
login("Balaji","hhja@g")

// function getValue(myVal):boolean{
//     if(myVal>5){
//         return true;
//     }
//     return "200 ok";
// }

const getHeloo=(s:string):string=>{
    return ""
}

const heros=["tyrion","Jhon snow","white walkers"]
//const heros=[1,2,3]

heros.map((hero):string=>{
    return `hero is ${heros}`;
})

function consoleError(errmsg:string):void{
    console.log(errmsg);
}

function  handleError(errmsg:string):never{
    throw new Error(errmsg);
}

export {}