const num=[1,2,3];
for(const a of num){
    console.log(a);
}
/*
1
2
3
*/

for(const a in num){
    console.log(num[a]);
}
/*
1
2
3
*/

for(const a in num){
    console.log(a);
}

/*
0
1
2
*/
const greet="hello World"
for(const g of greet){
    console.log(` Each char is ${g}`);
}

const map=new Map(); // it takes unique values
map.set('id',"116");
map.set('name','Nikhil')
map.set('course','DAC')
// map.set('id',"116"); // wont be printed as it has unique values
console.log(map)
// Map(3) { 'id' => '116', 'name' => 'Nikhil', 'course' => 'DAC' }
for(const key of map){
    console.log(key);
}
/*
[ 'id', '116' ]
[ 'name', 'Nikhil' ]
[ 'course', 'DAC' ]
*/
for(const [key] of map){
    console.log(key);
}
/*
id
name
course
*/
for(const [key,value] of map){
    console.log(key,'-',value);
}
/*
id - 116
name - Nikhil
course - DAC
*/
console.log("")
for(const key in map){
    console.log(key);
} // wont print anything as maps are not iterable
console.log("")
const myObj={
    game1:"NFS",
    game2:"GTA"
}
// for(const [key,value] of myObj){
//     console.log(key,'-',value);
// } // wont be able to print as objects are not iterable
for(const key in myObj){
    console.log(key)
}
/*
game1
game2*/
for(const key in myObj){
    console.log(myObj[key])
}
/*
NFS
GTA
*/
for(const key in myObj){
    console.log(`${key}-->${myObj[key]}`)
}
/*
game1-->NFS
game2-->GTA
*/

const prog=["a","b","c","d"];
for(const key of prog){
    console.log(key);
}
/*
a
b
c
d
*/
for(const key in prog){
    console.log(key);
}
/*
0
1
2
3
*/
for(const key in prog){
    console.log(prog[key]);
}
/*
a
b
c
d
*/

console.log("For Each");
const coding=["a","b","c"]; // as it is a call back function it wont have a name
// coding.forEach(function name(){})
// item is the iterator, we are calling every value as item 
coding.forEach(function(item){
    console.log(`values are ${item}`);
})
/*
values are a
values are b
values are c
*/

coding.forEach((item)=>{
    console.log(item);
})
/*
a
b
c
*/
function printMe(item){
    console.log(`printme-->${item}`)
}
coding.forEach(printMe); // we are giving a reference not calling the function here
/*
printme-->a
printme-->b
printme-->c
*/
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
/*
a 0 [ 'a', 'b', 'c' ]
b 1 [ 'a', 'b', 'c' ]
c 2 [ 'a', 'b', 'c' ]
*/

const myCode=[
    {
        langname:"javascript",
        ext:"js"
    }   ,
    {
        langname:"java",
        ext:"java"
    } , 
    {
        langname:"cpp",
        ext:"c++"
    }  
]
myCode.forEach((val)=>{
    console.log(`${val.langname}-->${val.ext}`)
})
/*
javascript-->js
java-->java
cpp-->c++
*/
