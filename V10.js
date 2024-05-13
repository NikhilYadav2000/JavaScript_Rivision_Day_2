const myArr=["Nikhil",6,"Rishika",7];
console.log(myArr[2]); // Rishika
myArr.push("Sona");
myArr.push(22);
console.log(myArr); // [ 'Nikhil', 6, 'Rishika', 7, 'Sona', 22 ]
myArr.pop();
myArr.pop();
console.log(myArr); // [ 'Nikhil', 6, 'Rishika', 7 ]
myArr.unshift(22);
myArr.unshift("Sona");
console.log(myArr); // [ 'Sona', 22, 'Nikhil', 6, 'Rishika', 7 ]
myArr.shift();
myArr.shift();
console.log(myArr); // [ 'Nikhil', 6, 'Rishika', 7 ]

console.log("");
console.log((myArr.includes("Rishika"))); // true
console.log((myArr.indexOf("Rishika"))); // 2
console.log((myArr.indexOf("Tanya"))); // -1

console.log("");
console.log(myArr);
console.log(typeof myArr); // [ 'Nikhil', 6, 'Rishika', 7 ],object
const myArr2=myArr.join()
console.log(myArr2);
console.log(typeof myArr2); // Nikhil,6,Rishika,7, string

console.log("");
console.log("A : ",myArr); // A :  [ 'Nikhil', 6, 'Rishika', 7 ]
const myArr3=myArr.slice(0,3)
console.log("slice : ",myArr3); // [ 'Nikhil', 6, 'Rishika' ]
console.log("B : ",myArr); // B :  [ 'Nikhil', 6, 'Rishika', 7 ]

console.log("");
console.log("A : ",myArr); // A :  [ 'Nikhil', 6, 'Rishika', 7 ]
const myArr4=myArr.splice(0,3);
console.log("splice: ",myArr4); // splice:  [ 'Nikhil', 6, 'Rishika' ]
console.log("B : ",myArr); // [B :  [ 7 ]

// Slice just trims the copy OG Array and and puts the required value in another array, but splice deletes that much array and the unrequired part of the array is left inside the OG array.














console.log("");
const newArr=new Array(6,"Nikhil","Rishika",7);
console.log(newArr[1]);
