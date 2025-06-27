import express from "express";
import { createEmployee,getEmployeesUsingfilter,updateEmployeeUsingId,deleteEmployeeUsingId,EmployeeLogin,getAllEmployeesDetails,getEmployeeById} from "../controllers/employeeController.js";

const route= express.Router();

route.post("/register-employee",createEmployee);
route.post("/login-employee",EmployeeLogin);
route.get("/get-employees-using-filter",getEmployeesUsingfilter);
route.put("/update-employee-using-id/:id",updateEmployeeUsingId);
route.delete("/delete-employee-using-id/:id",deleteEmployeeUsingId);
route.get("/get-all-employees",getAllEmployeesDetails);
route.get("/get-employee-by-customId/:id",getEmployeeById)

export default route;