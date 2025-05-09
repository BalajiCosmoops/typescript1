"use strict";
/* const enum seatChoice{
    AISLE="ailse",
    MIDDLE=0,
    WINDOW,
    FOURTH
}

    const hcSeat=seatChoice.FOURTH;
    console.log(hcSeat); */
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["CUSTOMER"] = 0] = "CUSTOMER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["MODERATOR"] = 2] = "MODERATOR";
})(Role || (Role = {}));
var Permission;
(function (Permission) {
    Permission[Permission["READ"] = 0] = "READ";
    Permission[Permission["WRITE"] = 1] = "WRITE";
    Permission[Permission["READ_AND_WRITE"] = 2] = "READ_AND_WRITE";
})(Permission || (Permission = {}));
function hasPermisssion(user, permission) {
    switch (user.role) {
        case Role.ADMIN:
            return true;
        case Role.CUSTOMER:
            if (permission === Permission.READ)
                return true;
            else
                return false;
        case Role.MODERATOR:
            if (permission === Permission.WRITE)
                return true;
            else
                return false;
    }
}
var user1 = { id: 1, name: "Balaji", role: Role.ADMIN };
var user2 = { id: 2, name: "Sri", role: Role.CUSTOMER };
var user3 = { id: 3, name: "Gopal", role: Role.MODERATOR };
console.log(hasPermisssion(user1, Permission.READ_AND_WRITE));
console.log(hasPermisssion(user2, Permission.READ));
console.log(hasPermisssion(user3, Permission.WRITE));
