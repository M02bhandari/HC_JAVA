/*
function addTwoNumber(number1,number2) {
    console.log(number1 + number2);
}

addTwoNumber (3, 4)
*/ 
/* 
function addTwoNumbers(number1,number2) {
    let  result = number1 + number2
    return result 
    console.log();

}

const result = addTwoNumber(3,5)

// console.log("Result:" , result);
*/

/*if condition */

/* 
function loginuserMessage(username) {

    if (username === undefined) {
        console.log("please logged in");
        return
    }

    return `${username} just logged in`
}

// console.log(loginuserMessage("bhandari"));

console.log(loginuserMessage());

*/

function calculateCartPrice( val1, val2,...num1){ // ... rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,500,600,700));

const user = {
    username: "bhnadari",
    prices: 199
}
function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//  handleobject(user)
handleobject({
    username: "bhandrai", //  object pass 
    price: 499
})

const myNewArray = [200, 300, 400, 600  ]
function returnSecondValue(getArray) {
    return getArray[1]
    
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue[200 , 400, 500, 1000]);




