import express from "express";
import {helper} from "./helper.js"
const app = express();
app.use(helper);
app.get("/",(req,res)=>{
    setTimeout(()=>{
        res.send("<h1>Event Without Non Blocking </h1>")
    },2000);   
});
app.listen(3000,()=>{

})
