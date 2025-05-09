interface Employee{
    readonly name:string;
    employeeId:number;
    getName():string;
}

interface Manager extends Employee{
    getEmployees():string[];
}

class Fresher implements Manager{
    name ="Balaji";
    employeeId: number=1;
    getName(): string {
        return this.name;
    }
    getEmployees(): string[] {
        return [];
    }
}

const Employee=new Fresher();
console.log(Employee);

/* const employee:Employee={
    name :"Balaji",
    employeeId:2
}
console.log(employee);
 */
export {}