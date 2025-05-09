"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
        this.employeeId = null;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    ;
    return Employee;
}());
var Fresher = /** @class */ (function (_super) {
    __extends(Fresher, _super);
    function Fresher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Balaji";
        _this.employeeId = 1;
        _this.leaveDays = 2;
        _this.fullSalary = 30000;
        _this.month = 2;
        return _this;
    }
    // getName(): string {
    //     return this.name;
    // }
    Fresher.prototype.getSalary = function () {
        var date = new Date();
        var numberOfDays = new Date(date.getFullYear(), this.month, 0).getDate();
        //console.log(numberOfDays);
        var oneDaySalary = this.fullSalary / numberOfDays;
        var salary = oneDaySalary * (numberOfDays - this.leaveDays);
        return Math.round(salary);
    };
    return Fresher;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Gopal";
        _this.employeeId = 1;
        _this.leaveDays = 2;
        _this.fullSalary = 100000;
        _this.month = 2;
        return _this;
    }
    // getName(): string {
    //     return this.name;
    // }
    Manager.prototype.getSalary = function () {
        var date = new Date();
        var numberOfDays = new Date(date.getFullYear(), this.month, 0).getDate();
        //console.log(numberOfDays);
        var oneDaySalary = this.fullSalary / numberOfDays;
        var salary = oneDaySalary * (numberOfDays - (this.leaveDays / 2));
        return Math.round(salary);
    };
    return Manager;
}(Employee));
var employee = new Fresher();
var salary = employee.getSalary();
console.log(employee.getName());
console.log(salary);
var employee2 = new Manager();
var salary2 = employee2.getSalary();
console.log(employee2.getName());
console.log(salary2);
