// #primitive

// 7 types : String , number, Boolearn, null, undifined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const BigNumber = 234342234564567789n





//Refrerance(Non primitive)

//Array, Objects, Functions

const heros = ["shaltiman", "naagraj", "doga"];
let myObj = {
    name: "piyush",
    age: 22,

}

const myFunction = function(){
    console.log("Hello world");
    
}
console.log(typeof heros);
//https://262.ecma-international.org/#sec-typeof-operator


//***************************************************************************************************************************************

// Stack (primitive), Heap(Non-primitive)

let myYoutubename = "piyushmishra.com"

let anothername = myYoutubename
anothername = "chaiaurcoade"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email : "user@goggle.com",
    upi: "user@ybl"
}

let uerTwo = userOne


userTwo.email = "piyush@google.com"

console.log(userOne.email);
console.log(userTwo.email);


