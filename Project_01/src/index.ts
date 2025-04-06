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
   private projectCount = 1
   protected courseCount = 2
   private city: string = "Brajrajnagar" 
   constructor(
      public name: string,
      public email: string
   ){

   }

   get _projectCount(): number {
      return this.projectCount;
   }
   set _projectCount(num){
      if(num<=1) throw new Error("Atleast more than 1 project needed")
   }
}

const abhishek = new User("Abhishek", "abhi@gmail")
// console.log(abhishek.city)          //not accessible


//Child class
class SubUser extends User{
   isFamily: boolean = true;

   changeCourseCount(){
      this.courseCount = 3;
   }
}
