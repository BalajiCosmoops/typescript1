/* const enum seatChoice{
    AISLE="ailse",
    MIDDLE=0,
    WINDOW,
    FOURTH
}

    const hcSeat=seatChoice.FOURTH;
    console.log(hcSeat); */

enum Role {
  CUSTOMER,
  ADMIN,
  MODERATOR
}
interface User{
    id:number;
    name:string;
    role:Role;
}
enum Permission{
    READ,
    WRITE,
    READ_AND_WRITE
}
function hasPermisssion(user:User,permission:Permission){
    switch (user.role){
        case Role.ADMIN:
        return true
        case Role.CUSTOMER:
        if(permission===Permission.READ)
            return true
        else
        return false

        case Role.MODERATOR:
            if(permission===Permission.WRITE)
                return true
            else
            return false
    }
}

const user1={id:1,name:"Balaji",role:Role.ADMIN}
const user2={id:2,name:"Sri",role:Role.CUSTOMER}
const user3={id:3,name:"Gopal",role:Role.MODERATOR}
console.log(hasPermisssion(user1,Permission.READ_AND_WRITE));
console.log(hasPermisssion(user2,Permission.READ));
console.log(hasPermisssion(user3,Permission.WRITE));

export {};
