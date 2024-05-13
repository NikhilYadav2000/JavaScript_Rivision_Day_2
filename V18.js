// DOnt use var as it is completely global
if(true){ // condition is true
console.log(13);
}// inside code will be executed

if(false){
    console.log(13);
}// inside code wont be executed

const p='a';
console.log(`use p ${p}`)
console.log("use p",p)

const balance=850;
if(balance<500) console.log("500");
else if(balance<750) console.log("750");
else if(balance<900) console.log("900"); // this will be printed
else console.log(1000);

//
const userLoggedIn=true;
const debitCard=true;
if(userLoggedIn && debitCard){
    console.log("Yes");
}else{
    console.log("No");
}
const a=true;
const b=false;
if(a || b){
    console.log("Yes");
}else{
    console.log("No");
}

//
const month=1;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;    
    case 3:
        console.log("Mar");
        break;
    default:
        console.log("Nan");
        break;
}

const userEmail="abc@gmail.com" // yes will be printed
if(userEmail){
    console.log("Yes");
}else{
    console.log("No");
}

const userEmail2="" // No will be printed here as there is no value inside it
if(userEmail2){
    console.log("Yes");
}else{
    console.log("No");
}

/*
falsy values - false,"", 0, -0, 0n(BigInt), null,undefined, null

Truthy values - "0","false"," ",[],{}, function(){}

"" is falsy
" " is truthy
*/

// To check if Array is empty or not
if(userEmail2.length===0) console.log("Arr is empty");

// To check if an Object is empty or not
const emptyObj={}
if(Object.keys(emptyObj).length===0) console.log("Obj is empty");
// Object.Keys() converts an object into arr so we now can check its length

console.log(false==0) // true
console.log(false=='') // true
console.log(0=='') // true

// Nullish Coalescing Operator (??): works on null and undefined
let val;
val=5??10
console.log(val); // 5

let val1;
// val1=null??10;
// val1=undefined??10;
val1=null??10??20;
console.log((val1)); // 10
// if there is a situation that null value has returned then either give e null or give me the second value

// Ternary Operator
// condition ? true : false
const t=13;
t===13?console.log("Yes"):console.log("No");