import mongoose from "mongoose";

const connectDB = async()=>{
       try {
           await mongoose.connect(process.env.MONGODB_URL_LOCAL)
           console.log("Database connected successfully")
       } catch (error) {
           console.log("Database connectivity failed");
       }
} 
export default connectDB;