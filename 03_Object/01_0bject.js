// singleton jab banta jab ham kisi constructor say banate hai]
//  object.create [constructor ]

// object literals

const mysym = ("key1")

const jsUser = {
    name : "Bhandari",
    "full name" : "Mithlesh bhandari",
    age : 22 ,
    [mysym]: "mykey1", // always symbol writen in [] bracket
    location : " Delhi",
    email:"bhnadari02@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","saturday"]

}
// when we used .email dont need to define that its a string.
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mysym]);
// console.log(jsUser["full name"]);

// jsUser.email = "mithles02@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "mithleshpw@airtel.com"
// console.log(jsUser);


// ##############..Function...###############

jsUser.greeting = function()
{
    console.log("hello Boss");
}
jsUser.greeting2 = function()
{
    console.log(`hello Boss, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2());

// timing 4:03:31 pause video