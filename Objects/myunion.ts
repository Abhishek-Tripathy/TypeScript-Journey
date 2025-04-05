type cardNum = {
   code: number
}
type card_name = {
   name: string
}

let card_details: cardNum | card_name = {code: 100}
card_details = {name: "Abhi"}

function getDatabaseId(id: number | string){
   //id.toUpperCase()   error because the type is note decided yet.
   if(typeof id === 'string') id.toLowerCase() //right way 
   if(typeof id === 'number') id * 2 //right way 

}

//with Arrays

const data1: string[] = ["Abhi", "Raj", "Satya"]
const data2: number[] = [1,2,3]

const data3: string[] | number[] = [1,2,3]   // either all elements are strings or numbers
const data4: string[] | number[] = ["1","2","3"]   // either all elements are strings or numbers

const data5: (string | number | boolean)[] = [1, 2, "3", "4", true] //now we can use all


//We can use this in variable assignment too

let seat_Type: "aisle" | "middle" | "window"    //only can be choosen between theese 3 options

