import express from "express";
const app = express();
const port = 3000;
//  MiddleWare
app.use((req,res,next)=>{
    console.log("Request Received");
    next();
})
// Get Method 
app.get("/",(req,res)=>{
    console.log(req.url);
    console.log(req.method);
    res.status(200).send("<h1>Home Page</h1>");
});
// Post Method
app.post("/login",(req,res)=>{
    res.status(404).json({"Error":"Page Not Found"});
});

app.listen(port,()=>{
    console.log("Server Running at http:/localhost:3000/");
})