//  Primitivee data type

//  7 types : string/ numbeer/ boolean/null/undefined/symbol/BigInt
// example
const score = 100
const scoreValue =100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

// const bigNumber =834346783189109n



// Reference /Non primitve 

// Array /object / function /

const heros = ["shaktiman" , "naagraj" , "superman"] 
let myobj = {
    name : "Bhandari",
    age : 22

}

const myfunction = function  (){
    console.log("hello world");
}

console.log(typeof anotherId );



//  ###############################33

//  stack ( primitive) , Heap (Non premitive)

let myYoutubename = "bhadndariboss"

let anotherName = myYoutubename
anotherName = "chaiaurcode"
 console.log(myYoutubename);
 console.log(anotherName);

 let userOne = {
    email :"user@google.com",
    upi :"user@ybl"


 }

 let userTwo = userOne

 userTwo.email = "bhandari@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);