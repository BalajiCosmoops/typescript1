interface User{
    readonly dbId:number,
    email: string,
    userId: number;
    googleId?:string,
    //startTrial:()=> string
    startTrial():string,
    getCoupon(couponname:string,val:number):number
}
const balaji:User={dbId:123,email:"balaji@01",userId:1122,
    startTrial:()=>{
        return "trail starrted"
    },
    getCoupon:(couponname:"balaji",off:20)=> {
        return 10;
    },
}
balaji.email="sri@gmai";
//balaji.dbId=22

export {}