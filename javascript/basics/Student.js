const College = require("./College");

class Student extends College{

    constructor(studentFullName,collegeName){
        super(collegeName);
        this.fullName = studentFullName;
    }
    getFullName(){
        console.log(`Fullname is ${this.fullName}`);
        
    }
    // setFullName(name){
    //     this.fullName = name;
    // }

    getStudentDetails(){
        this.collegeName = super.getCollegeName();
        console.log(`student name is ${this.fullName} and he is from ${this.collegeName}`)
    }
}
const obj1 = new Student("Tom","Providence");
// obj1.setFullName();
// obj1.getFullName();
// obj1.getCollegeName();
obj1.getStudentDetails();

const obj2 = new Student("Ammu","IHRD");
// obj2.setFullName();
// obj2.getFullName();
// obj2.getCollegeName();
obj2.getStudentDetails();


