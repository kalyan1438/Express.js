import express from "express";
import router from "./routes/user.routes.js";


const app = express();
const port = 3000;
app.use((req,res,next)=>{
  console.log(`${req.method} ${req.url}`);
  next(); 
})
app.use(express.json());
app.use("/users", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
