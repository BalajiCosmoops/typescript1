// const user={
//     name: "Balaji",
//     email:"balaji@gmail.com",
//     isActive:true
// }

// function createUser({name:string,isPaid:boolean}){

// }
// let newUser={name: "Balaji",isPaid:true,email:"balaji@cosmo"}
// createUser(newUser)

// function createCourse():{name: "Balaji",price:number}{
//     return {name:"Balaji",price:399}
// }

// type User={
//     name:string;
//     email:string;
//     isActive:boolean;
// }

// function createUser(user:User){
//     return {name:"",email:"",isActive:true}
// }
// createUser({name:"",email:"",isActive:true})
// export {}


type User={
    readonly  _id:string;
    name:string;
    email:string;
    isActive: boolean;
    creditCardDetails?:number;
}

let myUser:User={
    _id: "12345",
    name: "Balaji",
    email:"balaji",
    isActive:true,
}

myUser.email="balji@gmail";
//myUser._id="123"

type cardNumber={
    cardNumber:String;
}
type cardDate={
    cardDate:number;
}
type cardDetails= cardNumber & cardDate & {
    Cvv:number;
}