const express = require("express");
const app = express();
const port = 3000;
app.use((req,res,next)=>{
    console.log("Request Recived");
    next();
});
app.get("/",(req,res)=>{
    setTimeout(()=>{
        res.send([{"Name":"Kalyan","Age":19,"Dept":"CSE"}
            ,{"Name":"Venkatesh","Age":20,"Dept":"CSE"},
            {"Name":"RaviTeja","Age":20,"Dept":"CSE"},
        {"Name":"Gowtham","Age":20,"Dept":"CSE"}])
    },3000);
})
app.listen(port,()=>{});