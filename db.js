import mongoose from "mongoose";
export const db = async (connectionString)=>{
    try{
        await mongoose.connect(connectionString);
        console.log("MongoDB Connected");
        
    }
    catch(err){
        console.log("Connection Failed",err.message);
        process.exit(1);
    }
}