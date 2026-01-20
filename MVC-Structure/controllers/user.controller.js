import {findUserById} from "../models/user.model.js";

export const getProfile =  (req,res)=>{
    const user = findUserById(req.userId);
    if(!user){
        res.status(401).send("Unauthorized");
    }
    res.status(200).json({
        id:user.id,
        userNmae:user.name,
        email:user.email
    })
}