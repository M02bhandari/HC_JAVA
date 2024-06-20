// const tinderUser = new Object () singletune object
const tinderUser ={}
tinderUser.id = "12345"
tinderUser.name ="Golu"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {

email : "some@gmail.com",
fullname :{
    userfullname:{
        firstname : "Bhandari",
        lastname : "Mithlesh"
    }

}
}

// console.log(regularUser.fullname.userfullname.firstname); 

const obj1 ={ 1: "a", 2: "b"}
const obj2 ={ 3: "a", 4: "b"}
const obj4 ={ 5: "a", 6: "b"}

// const obj3 ={ obj1, obj2 }
//  const obj3 = Object.assign({},obj1,obj2, obj4) 
 /* { } its use for showing empty object */

 const obj3 = {...obj1, ...obj2, ...obj4}
//  console.log(obj3);

const user =[
    {
        id : 1,
        email : "bhandari@gmmail.com"
    },
    {
        id : 1,
        email : "bhandari@gmmail.com"
    },
    {
        id : 1,
        email : "bhandari@gmmail.com"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasownproperty('isLoggedIn'));


const course ={
    coursename: "js in hindi",
    price: "999",
    courseTeacher : "Hitesh ch"

}

// course.courseTeacher

const {courseTeacher: Teacher} = course /* distructure courseTecher to teacher only*/

console.log(Teacher);

// { json
//     "name" : "bhandari",
//     "coursename": "js in hindi",
//     "price": "freedom"
// }





