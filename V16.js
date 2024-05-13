console.log("Running this inside an object");
const user={
    username:"Nikhil",
    id:116,
    welcomeMessage:function(){
        console.log(`${this.username}, u r welcome`);
        console.log(this);
    }// this to tell the compiler that the variable belongs the scope within the object
}
user.welcomeMessage() // Nikhil, u r welcome
/*
{
    username: 'Nikhil',
    id: 116,
    welcomeMessage: [Function: welcomeMessage]
} 
*/
user.username="Rishika"
user.welcomeMessage() // Rishika, u r welcome
/*
{
  username: 'Rishika',
  id: 116,
  welcomeMessage: [Function: welcomeMessage]
}
*/
console.log(this); // {}
// If u do this inside chrome then window object will be printed as the most global object is window thats the reason we are able to access everything(every event) 
// But here we have an empty object

console.log("Running this inside a function");
function chai(){
    console.log(this);
}
chai(); // if we run it inside a function it will give lots of info but...
function chai1(){
    const username=13
    console.log(this.username); // will give undefined
}
chai1()
// we cant use this inside a function

const chai2=function(){
    const username=13
    console.log(this.username); // will give undefined
}
chai2()

console.log("");
console.log("Arrow Function");
const chai3=()=>{
    let username="Nikhil"
    console.log(this.username); // undefined
}
chai3()
const chai4=()=>{
    let username="Nikhil"
    console.log(this); // {}
}
chai4()

console.log("");
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(13,10));

console.log("");
console.log("Implicit return");
const addThree=(n1,n2,n3)=>n1+n2+n3; // we dont need to write return keyword if we are not using {} brackets
console.log(addThree(10,13,1310)); // 1333

const retVal=()=> ({username:"Nikhil"})
console.log(retVal()); // { username: 'Nikhil' }