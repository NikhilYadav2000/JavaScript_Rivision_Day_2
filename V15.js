// // Scope
// if(true){
//     let a=1;
//     const b=2;
//     var c=3;
// }
// // console.log(a); wont be able to print 
// // console.log(b); wont be able to print 
// // console.log(c); it will be printed so avoid using var

// let a=10;
// let b=20;
// var c=30
// if(true){
//     let a=1;
//     const b=2;
//     var c=3;
//     // c=3; // will still give the same value
// }
// console.log(a); //10 
// console.log(b); //20
// console.log(c); //3

// function one(){
//     const username="Nikhil"
//     function two(){
//         const website="youtube"
//         console.log(username); // will print this as username has a scope here
//     }
//     // console.log(website); // wont be able to print this as it is locally available inside two()
//     two();
// }
// one();

// if(true){
//     const username="Nikhil"
//     if(username==="Nikhil"){
//         const website="Youtube"
//         console.log(username+" "+website)
//     }
//     // console.log(website); // will give err
// }
// // console.log(username); // will give err

// Functions
// function addOne(num){
//     return num+1;
// }
// const res=addOne(5);
// console.log(res); // 6

// // Expression
// const addTwo=function(num){
//     return num+2
// }
// const res2=addTwo(5)
// console.log(res2); // 7

//  if u call the function before defining them it is okay but u cant do it with expressions
const res=addOne(5);
console.log(res); // 6
function addOne(num){
    return num+1;
}


const res2=addTwo(5)
console.log(res2); // It will give err as we are storing the value in addTwo
const addTwo=function(num){
    return num+2
}
// Both Function and Expression are same its just the way of writing