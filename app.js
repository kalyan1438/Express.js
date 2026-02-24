import express from "express";
import dotenv from "dotenv";
import { db } from "./db.js";
dotenv.config();
const app = express();
console.log("Using URI:", process.env.MONGODB);
db(process.env.MONGODB);
app.listen(process.env.PORT)