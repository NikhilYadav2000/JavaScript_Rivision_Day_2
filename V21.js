const a = [1, 2, 3, 4, 5];
const values = a.forEach((item) => {
  return item;
});
console.log(values); // for each loop doesnt return anything so it will give undefined
const val2 = a.forEach((i) => {
  console.log(i);
/*
1
2
3
4
5
*/
});

console.log(val2); // undefined

// 
const nums=[1,2,3,4,5,6,7];
const newNums=nums.filter((num)=>num>4); // () its a call back function and we didnt use {
//
// } bcoz it was just a one line code if we add this then we have to add a return keyword
console.log(newNums); // [ 5, 6, 7 ]

const newNums2=nums.filter((num)=>{
    return num>4;
})
console.log(newNums); // [ 5, 6, 7 ]

const newNums3=[];
nums.forEach((num)=>{
    if(num>4){
        newNums3.push(num);
    }
})
console.log(newNums3); // [ 5, 6, 7 ]

console.log("a");
setTimeout(()=>{
    console.log("2");
})
console.log("c");
// a->c->b as it will fire all functions from the stack then it will go for events

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

console.log(books);

const userBooks=books.filter((book)=>book.genre==="Fiction")
console.log(userBooks);
const userBooks2=[]
books.forEach((book)=>{
    if(book.publish>=1999 &&book.genre==="Science"){
        userBooks2.push(book)
    }
})
console.log(userBooks2);