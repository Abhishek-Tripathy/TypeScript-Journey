const superHeros: string[] = []
const heroPoints: Array <number> = []

superHeros.push("Thor")
heroPoints.push(100)

type Player = {
   name: string,
   age: number,
   readonly _id: string,
}

const allPlayers: Player[] = []
const varun: Player = {
   name: "Abhishek",
   age: 18,
   _id: "1234567",
}
allPlayers.push(varun)

console.log(allPlayers)