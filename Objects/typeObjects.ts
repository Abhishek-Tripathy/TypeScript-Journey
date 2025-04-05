type cardNumber = {
   cardNum: number
}
type cardHolderName = {
   firstName: string,
   lastName: string
}

type cardDetails = cardNumber & cardHolderName & {cvv: number}

const myCreditcard: cardDetails = {
   cardNum: 1234567,
   firstName: "Abhishek",
   lastName: "Tripathy",
   cvv: 9876,
}

console.log(myCreditcard)