const My_friends = ["kamla" ,"jitu", "ravi", "arvind"]
const hm_friends =["arpan","arun","gaurav"]

// My_friends.push(hm_friends)

// console.log(My_friends);
// console.log(My_friends[3][2]);

//  const allfrnds = My_friends.concat(hm_friends)
// console.log(allfrnds);

const allfrnds = [...My_friends, ...hm_friends]
console.log(allfrnds);

const another_array = [1,2,33,4,[5,7,8,] ,8,[33,5,67,[5,2,6,]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);



console.log(Array.isArray("Bhandari"))
// console.log(Array("Bhandari"));

console.log(Array.from("Bhandari")) /*.from covert in array */

console.log(Array.from({name:"Bhandari"})) /* always gives the key value than get the correct ans not empty bracket*/

// convert in array by Array.of
let score  = 1000
let score1 = 2000
let score2 = 3000

console.log(
    Array.of(score,score1,score2)
);
