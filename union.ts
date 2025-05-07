let score:Number| String=33;

score=44;
score="52"

type User={
    name: string;
    id : number;
}
type Admin={
    userName: string;
    id :number;
}

let balaji: User | Admin ={name:"balaji",id:123};

balaji={userName:"balaji",id:123}

/* function getDbId(id:string|number){
    console.log(`ht database Id:${id}`);
} */

getDbId(5);
getDbId("55");

function getDbId(id:string|number){
 if(typeof id=== "string"){
    id.toUpperCase() ;
 }  
}

//Array

const data: number[]=[1,2,3,4]
const data1: string[]=["1","2","3"]
const data2:(number | string | boolean)[]=[1,"2","3",true]