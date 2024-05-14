const nums=[1,2,3,4,5,6];
const newNums=nums.map((num)=>num+10);
console.log(newNums); // [ 11, 12, 13, 14, 15, 16 ]

// Chaining
const newNums2=nums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>30);
console.log(newNums2); // [ 31, 41, 51, 61 ]

// Reduce
const myNums=nums.reduce(function(acc,curr){
    console.log(`acc : ${acc}--> val : ${curr}`);
    return acc+curr;
},0)
console.log(myNums); // 21
/*
acc : 0--> val : 1
acc : 1--> val : 2
acc : 3--> val : 3
acc : 6--> val : 4
acc : 10--> val : 5
acc : 15--> val : 6
*/

const myNums2=nums.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(myNums2); // 21

const myNums3=nums.reduce((acc,curr)=>acc+curr,0)
console.log(myNums3); // 21

const shoppingCart=[
    {
        item:"Bag",
        price:100000
    },
    {
        item:"Dress",
        price:200000
    },
    {
        item:"Car",
        price:30000000
    }
]
const TotalCost=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(TotalCost); // 30300000