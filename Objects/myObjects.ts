// const User = {
//    name: "Abhishek",
//    email: "ABh@124",
//    isAdult: true
// }

// function createUser ({name: string, isAdult: boolean}) {
   
// }

// createUser({name: "Abhinash", isAdult: false})

// function createCourse (): {name: string, price: number} {
//    return {name: "string", price: 100 }
// }

// const test = createCourse()
// console.log(test)

type User = {
   name: string,
   age: number,
   readonly _id: string,
   creditCardNumber?:string
}

const myUser: User = {
   name: "Abhishek",
   age: 18,
   _id: "1234567",
}

myUser.name = "Tripathy"
//myUser._id = 98765 cant do this

console.log(myUser)