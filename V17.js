(function chai(){ // Named IFFE
    console.log(`DB Connected`);
})(); // DB Connected
// iIFE - Immediately Invoked Function Expressions- we use to avoid global scope members, declarations (pollution)
// add ; after first function
(()=>{
    console.log(`DB2 Connected `);
})(); // DB2 Connected 

((name)=>{
    console.log(`DB2 Connected ${name} `);
})("Nikhil") // DB2 Connected Nikhil
