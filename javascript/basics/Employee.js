const Organization = require("./Organaization");

class Employee extends Organization{

    constructor(EmployeeFullName,organizationName){
        super(organizationName);
        this.fullName = EmployeeFullName;
    }
    getFullName(){
        console.log(`Fullname is ${this.fullName}`);
        
    }
   

    getEmployeeDetails(){
        this.organizationName = super.getOrganizationName();
        console.log(`Employer name is ${this.fullName} and she is from ${this.organizationName}`)
    }
}
const obj1 = new Employee("Aswathi","IBM");

obj1.getEmployeeDetails();

const obj2 = new Employee("Adheena","Google");

obj2.getEmployeeDetails();


