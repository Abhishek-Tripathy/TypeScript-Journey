"use strict";
// class User {
//    name: string         //anything in ts not flagged is public
//    email: string
//    private city: string = "Brajrajnagar"
//    constructor(name: string, email: string){
//       this.name = name;
//       this.email = email;
//    }
// }
//easier way to write above code
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.projectCount = 1;
        this.courseCount = 2;
        this.city = "Brajrajnagar";
    }
    get _projectCount() {
        return this.projectCount;
    }
    set _projectCount(num) {
        if (num <= 1)
            throw new Error("Atleast more than 1 project needed");
    }
}
const abhishek = new User("Abhishek", "abhi@gmail");
// console.log(abhishek.city)          //not accessible
//Child class
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.courseCount = 3;
    }
}
