"use strict";
let score = 33;
score = 44;
score = "52";
let balaji = { name: "balaji", id: 123 };
balaji = { userName: "balaji", id: 123 };
/* function getDbId(id:string|number){
    console.log(`ht database Id:${id}`);
} */
getDbId(5);
getDbId("55");
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
//Array
const data = [1, 2, 3, 4];
const data1 = ["1", "2", "3"];
const data2 = [1, "2", "3", true];
