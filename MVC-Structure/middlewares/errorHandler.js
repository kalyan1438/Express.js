export const errorHandler = (err,req,res,next)=>{
    console.error("Error : ",err.meassage);
    res.status(404).send("<h1>Server Error Handle By Error Handler</h1>");
};