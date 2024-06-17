const name = "Bhandari"
const repoCount = 50

// console.log(name + repoCount + "value" );  dont use this bcz its too old  pattern
// use string interpolation method

console.log(`Hello my name is ${name } my repo  count is ${repoCount} `);


const gameName = new  String ('bhandari')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase ());
console.log(gameName.indexOf('d'));
console.log(gameName.charAt('5'));


const newString =  gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    bhandari   "
console.log(newStringOne);
console.log(newStringOne.trim ());

const url = "https://psychic 20%-garbanzo-q7qxwrxqvr"

console.log(url.replace ('20%','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));

