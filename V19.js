// for(let i =0;i<=10;i++){
//     if(i==5){
//         console.log(`Yes Daddy ${i}`);
//     }
//     console.log(i);
// }
// const myArr=[10,13,1310];
// for(let i =0;i<myArr.length;i++){
//     console.log(myArr[i]);
// }
// /*
// 10
// 13
// 1310
// */
// for(let i =0;i<myArr.length+1;i++){
//     console.log(myArr[i]); 
// }
// /*
// 10
// 13
// 1310
// undefined
// */

// for(let i =0;i<=10;i++){
//     if(i==5){
//         console.log("5 came so stopping");
//         break;  
//     } 
//     console.log(`value is ${i}`); // will print till 4
// }
// console.log("");
// for(let i =0;i<=10;i++){
//     if(i==5) continue;
//     console.log(i); // will print everything except 5
// }

// while 
let val=0;
while(val<=10){
    console.log(`Value is ${val}`);
    val=val+2;
}
/*
Value is 0
Value is 2
Value is 4
Value is 6
Value is 8
Value is 10
*/

let myArr=["a","b","c"];
let arr=0
while(arr<myArr.length){
    console.log(myArr);
    arr++;
}
/*
[ 'a', 'b', 'c' ]
[ 'a', 'b', 'c' ]
[ 'a', 'b', 'c' ]
*/

let score=0;
do{
    console.log(score);
    score++;
}while(score<5)
/*
0
1
2
3
4
*/
let score1=6;
do{
    console.log(score1);
    score1++;
}while(score1<5); // 6
// will run atleast ones