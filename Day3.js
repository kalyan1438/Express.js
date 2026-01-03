import fs from"fs";
import path from "path";
import http from "http";
import EventEmitter from "events";
fs.readFile("./helper.js","utf8",(err,data)=>{
    console.log(data)
});
const Path = path.join("Express","app.js");
console.log(Path);
const server = http.createServer((req,res)=>{
    res.end("<h1>Http Server Created</h1>");
});
server.listen(3000);
const emmiter = new EventEmitter();
emmiter.on("done",()=>{
    console.log("Done");
});
setTimeout(()=>{
    emmiter.emit("done");
},2000);
