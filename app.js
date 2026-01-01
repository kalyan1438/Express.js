const express = require("express");
const app = express();
const port = 3000;
// app.get("/get",(req,res)=>{
//     setTimeout(()=>{
//         res.send("<h1>Get Method Route</h1>");
//     },5000);
    
// });
// app.post("/post",(req,res)=> res.send("<h1>Post Method Route</h1>"));
// app.put("/put",(req,res)=> res.send("<h1>Put Method Route</h1>"));
// app.delete("/delete",(req,res)=> res.send("<h1>Delete Method Route</h1>"));
app.get("/user",(req,res)=>{
    res.send("Get Route");
});
app.post("/user",(req,res)=>{
    res.send("Post Method");
})
app.listen(3000,()=>{});