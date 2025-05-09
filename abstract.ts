abstract class Employee{
    abstract readonly name:string;
    employeeId:number | null=null;
    getName():string{
        return this.name;
    };
    abstract getSalary():number;
}

class Fresher extends Employee{
    name ="Balaji";
    employeeId: number=1;
    leaveDays=2;
    fullSalary=30000;
    month=2;
    // getName(): string {
    //     return this.name;
    // }
    getSalary():number {
        let date=new Date();
        const numberOfDays=new Date(date.getFullYear(),this.month,0).getDate();
        //console.log(numberOfDays);
        const oneDaySalary=this.fullSalary/numberOfDays
        const salary=oneDaySalary*(numberOfDays-this.leaveDays)
        return Math.round(salary);
    }
}
class Manager extends Employee{
    name ="Gopal";
    employeeId: number=1;
    leaveDays=2;
    fullSalary=100000;
    month=2;
    // getName(): string {
    //     return this.name;
    // }
    getSalary():number {
        let date=new Date();
        const numberOfDays=new Date(date.getFullYear(),this.month,0).getDate();
        //console.log(numberOfDays);
        const oneDaySalary=this.fullSalary/numberOfDays
        const salary=oneDaySalary*(numberOfDays-(this.leaveDays/2))
        return Math.round(salary);
    }
}
const employee:Fresher = new Fresher();
const salary= employee.getSalary();
console.log(employee.getName());
console.log(salary);

const employee2:Manager = new Manager();
const salary2= employee2.getSalary();
console.log(employee2.getName());
console.log(salary2);
export {}

