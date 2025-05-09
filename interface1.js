"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fresher = /** @class */ (function () {
    function Fresher() {
        this.name = "Balaji";
        this.employeeId = 1;
    }
    Fresher.prototype.getName = function () {
        return this.name;
    };
    Fresher.prototype.getEmployees = function () {
        return [];
    };
    return Fresher;
}());
var Employee = new Fresher();
console.log(Employee);
