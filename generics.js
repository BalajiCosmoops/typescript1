"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("balaji");
// identityFour<Bootle>({}){   }
function getSearchProduct(product) {
    var myIndex = 3;
    return product[myIndex];
}
var getMoreSearchProduct = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
var userDetails = function (user) {
    console.log(user);
};
userDetails({ user: "Balaji" });
var userDetails1 = function (des) {
    console.log(des);
};
var Emp = function (user) {
    console.log(user);
};
Emp({ employeeID: 25, employeeName: "Balaji", email: "balaji@gmail.com" });
var bob = {
    name: "Balaji",
};
console.log(bob);
var Value = 20;
console.log(typeof Value);
