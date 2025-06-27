import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db.js";
dotenv.config();
//To handle the routes
const app = express();
const PORT= process.env.PORT || 3000
connectDB();

app.listen(3000,()=>{
     console.log(`Server is running on port ${PORT}`)
})
