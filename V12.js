// singleton - just 1 object of its type - made with the help of Constructor
// Object.create;
// multiton - multiple objects - made with the help of literals
// object literals

// want to access a symbol
const mySym=Symbol("10");
const jsUser={
    name:"Nikhil",
    // full name:"Nikhil Yadav", // wont work so out it in string
    "full name":"Nikhil Yadav",
    age:23,
    [mySym]:"13",
    firends:["Rishika","Sona","Mona"]
}
console.log(jsUser);
/*
{
  name: 'Nikhil',
  'full name': 'Nikhil Yadav',
  age: 23,
  firends: [ 'Rishika', 'Sona', 'Mona' ],
  [Symbol(10)]: '13'
}
*/


console.log(jsUser.firends);
console.log(jsUser["name"]);
// when we enter name:"Nikhil", internally it takes it as "name":"Nikhil", so when accessing it give a string "name"
// only way to access "Full name"
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]); // String only

jsUser.mySym="1310";
console.log(jsUser);

/*
{
  name: 'Nikhil',
  'full name': 'Nikhil Yadav',
  age: 23,
  firends: [ 'Rishika', 'Sona', 'Mona' ],
  mySym: '1310',
  [Symbol(10)]: '13'
}
*/

// if u dont want to change any values then
// Object.freeze(jsUser);
jsUser["full name"]="Nikhil"
console.log(jsUser); // No changes

jsUser.greeting=function(){
    console.log("Hii!!!");
}
console.log(jsUser); 
/*
{
    name: 'Nikhil',
    'full name': 'Nikhil',
    age: 23,
    firends: [ 'Rishika', 'Sona', 'Mona' ],
    mySym: '1310',
    greeting: [Function (anonymous)],
    [Symbol(10)]: '13'
}
*/
console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting());
// Hii!!!
// undefined

jsUser.greeting2=function(){
    console.log(`Hello ${this.name}`);
}
console.log(jsUser.greeting2());
// Hello Nikhil
// undefined

jsUser.ex="Tanya";
console.log(jsUser);
/*
{
  name: 'Nikhil',
  'full name': 'Nikhil',
  age: 23,
  firends: [ 'Rishika', 'Sona', 'Mona' ],
  mySym: '1310',
  greeting: [Function (anonymous)],
  greeting2: [Function (anonymous)],
  ex: 'Tanya',
  [Symbol(10)]: '13'
}
*/