import express from "express";
import { createEmployee,getEmployeesUsingfilter,updateEmployeeUsingId,deleteEmployeeUsingId } from "../controllers/employeeController.js";

const route= express.Router();

route.post("/register-employee",createEmployee);
route.get("/get-employees-using-filter",getEmployeesUsingfilter);
route.put("/update-employee-using-id/:id",updateEmployeeUsingId);
route.delete("/delete-employee-using-id/:id",deleteEmployeeUsingId);

export default route;