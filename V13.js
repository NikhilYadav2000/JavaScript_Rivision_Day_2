// Singleton
const tinderUser=new Object();
tinderUser.id=13;
tinderUser.name="Tanya"
tinderUser.isLoggedIn=false;
console.log(tinderUser); // { id: 13, name: 'Tanya', isLoggedIn: false }

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            fn:"Abc Def"
        }
    }
}
console.log(regularUser.fullname.userfullname.fn); // Abc Def
console.log("");

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=obj1;
console.log(obj3); // { '1': 'a', '2': 'b' }
const obj4={obj1,obj2};
console.log(obj4); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd
// OR
const obj5=Object.assign({},obj1,obj2); // empty array {} acts as a target, and obj1, obj2 acts as source and the values get pushed in {}, if u dont add {}, then it will go inside obj1
const obj6=Object.assign(obj1,obj2); 
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log("");
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log("");
console.log("Spread");
const obj7={...obj1,...obj2}
console.log(obj7);
/*
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
*/

// Array of Objects
const user=[
    {
        id:13,
        email:"abc@gmail.com"
    },
    {
        id:14,
        email:"def@gmail.com"
    }
]

console.log("");
console.log(user[0].email); // abc@gmail.com
console.log(user);
/*
[
  { id: 13, email: 'abc@gmail.com' },
  { id: 14, email: 'def@gmail.com' }
]
*/
console.log("");
console.log(tinderUser); // { id: 13, name: 'Tanya', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 13, 'Tanya', false ]
// will print like an array
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true