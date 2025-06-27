import Employee from "../models/employee.js";

export const createEmployee = async (req,res)=>{
    const {name, email , dept, role,yearsOfExperience,salary,password} = req.body;
    try {
          if(!name || !email || !dept || !role || yearsOfExperience<0 || !salary || !password){
        return res.status(404).json({message:"Something is missing"});
          }

    // const exist = await Employee.findOne({email});
    // console.log(exist);
    // if(exist){
    //     return res.status(500).json({message:"Employee already exists, you please loggin"});
    // }

    const employee = new Employee({
          name, email , dept, role,yearsOfExperience,salary ,password
    })

    await employee.save();

    return res.status(201).json({message:"Employee account has been successfully created!!", employee})
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }
  
}


export const getEmployeesUsingfilter = async (req,res) =>{
       const {role,dept} = req.query;
       try {
             let filter={};
             if(role){
                filter.role= new RegExp(role,"i")
             }
             if(dept){
                filter.dept= new RegExp(dept,"i");
             }

             const employees = await Employee.find(filter);

             if(!employees){
                return res.status(404).json({message:"Employee not found"});
             }

             return res.status(200).json({message:"Employees details", employees})

       } catch (error) {
            return res.status(500).json({message:"Internal server error"})
       }
}

export const updateEmployeeUsingId = async (req,res) =>{
          const {id}= req.params;
          const {name, dept, role , salary} = req.body;
          try {
                const employee = await Employee.findOneAndUpdate({id},{name, dept, role , salary}, {new:true});
                  if(!employee){
                  return res.status(404).json({message:"Employee not found"});
                 }
                return res.status(200).json({message:"Employee updated successfully, details", employee})
          } catch (error) {
            return res.status(500).json({message:"Internal server error"})
          }
}

export const deleteEmployeeUsingId = async (req,res) =>{
        const {id} = req.params;
        try {
            await Employee.findOneAndDelete({id});
             return res.status(200).json({message:"Employee data deleted successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal server error"})
        }
}