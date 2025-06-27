import express from "express"
import dotenv from "dotenv"
import connectDB from "./db.js";
import employeeRoute from "./routes/employeeRoute.js";
dotenv.config();
//To handle the routes
const app = express();
app.use(express.json());
const PORT= process.env.PORT || 3000
connectDB();

app.use("/api",employeeRoute);
app.listen(3000,()=>{
     console.log(`Server is running on port ${PORT}`)
})
