export const  helper = (req,res,next)=>{
    console.log("Requset Recieved",new Date().toISOString());
    next();
}