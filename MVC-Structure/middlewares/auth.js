export const auth = (req,res,next)=>{
    if(!true){
        const err = new Error("Unauthorized");
        err.statusCode = 401;
        next(err);
        return
    }
    req.userId = 1;
    next();
}