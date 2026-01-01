// JavaScript Basis 
let a=10; // local scope
var b=10; // functional scope
const c=20 // global constant scope

// Functions 
function greet(){ // declration
    // bodt of the function
    console.log("Hello From Function");
}
greet();
// Function Expression with Arrow function Syntax
const fun = ()=>{
    console.log("Arrow function Expression");
}
fun();
// CallBacks 
setTimeout(() => {
    console.log("Hello from CallBack");
}, 2000);
// Promises & Asycn-Await
const promise= ()=>{
    return new Promise((reslove,reject)=>{
    setTimeout(()=>{
        if(true) reslove("Promise Resloved");
        else reject("Promise Rejected");
    },2000)
    
});
}

async function paa() {
    const data = await promise();
    console.log(data);
}