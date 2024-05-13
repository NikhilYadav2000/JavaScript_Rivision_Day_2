const dc=["Batman","Wonder Woman","Flash"]
const marvel=["SpiderMan","Captain America","Iron Man"];
// dc.push(marvel);
// console.log(dc);
/*
 [
  'Batman',
  'Wonder Woman',
  'Flash',
  [ 'SpiderMan', 'Captain America', 'Iron Man' ]
]
// It took an Array as input data and it is treated as a single element. 
 */
// console.log(dc[3][0]); // SpiderMan

// console.log("");
// console.log("Concat Method");
// dc.concat(marvel);
// console.log(dc);
/*
[
  'Batman',
  'Wonder Woman',
  'Flash',
  [ 'SpiderMan', 'Captain America', 'Iron Man' ]
]
// Same output
*/

// concat - returns a new Array, so assign it to a new variable otherwise it will give the same output as push.

// console.log("");
// const superHeroes=dc.concat(marvel);
// console.log(superHeroes);
/*
[
  'Batman',
  'Wonder Woman',
  'Flash',
  'SpiderMan',
  'Captain America',
  'Iron Man'
]
*/

console.log("");
console.log("Spread Method");
const superHeroes2=[...dc,...marvel];
console.log(superHeroes2);
// [
//     'Batman',
//     'Wonder Woman',
//     'Flash',
//     'SpiderMan',
//     'Captain America',
//     'Iron Man'
//  ]
// we can concat 2 Arrays,
// spread we can do multiple :  [...A,...B...C]

console.log("");
console.log("Flatening deep Arrays");
const myArr1=[1,2,[3,4],[5,6,[7,8]],9];
const myArr2=myArr1.flat(1);
// to flatan the deep arrays into a single array, infinity is upto how many dept u want.
console.log(myArr2); //[ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9 ]
console.log("");
const myArr3=myArr1.flat(Infinity);
console.log(myArr3); 
/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

console.log("");
console.log("String-->Array");
console.log(Array.isArray("Nikhil")); // false
console.log(Array.isArray([1,2,3])); // true
console.log(Array.from("Nikhil")); // [ 'N', 'i', 'k', 'h', 'i', 'l' ] // converts string to Array

console.log("");
console.log("Object-->Array");
console.log(Array.from({name:"Nikhil"})); // [] can't convert, we have to tell what to make as the array, key or values

console.log("");
console.log("MultipleIntegerVariables-->Array");
console.log(Array.of(1,2,3)); // [ 1, 2, 3 ]
const n1=13;
const n2=10;
const n3=1310;
console.log(Array.of(n1,n2,n3)); // [ 13, 10, 1310 ]