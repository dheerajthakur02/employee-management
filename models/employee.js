import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid"
import bcrypt from "bcryptjs"
const EmployeeSchema = new mongoose.Schema({
     id:{
        type:String,
        default: ()=>`emp-${uuidv4()}`
     },
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
         type:String,
         required:true
     },
     dept:{
        type:String,
        required:true
     },
     role:{
        type:String,
        required:true
     },
     joiningDate:{
        type:Date,
        default:Date.now
     },
     yearsOfExperience:{
        type:Number,
        required:true
     },
     salary:{
        type:String,
        required:true
     },
     status:{
        type:String,
        enum:["resigned","leave","present"],
        default:"present"
     }
},{timestamps:true})

EmployeeSchema.pre("save",  async function(next){
      if(!this.isModified("password"))
        return next();
      try {
        const salt =await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      } catch (error) {
          next(error);
      }
})
export default mongoose.model("Employee",EmployeeSchema);