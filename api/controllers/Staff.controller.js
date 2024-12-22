
import Fbuser from "../models/staff.model.js";


export const add = async(req,res,next)=>{

    
   const username=req.body.email;
  
  const password=req.body.password;

      const newstaffmember = new Fbuser({
        username,
        password,

        
        
});

      try {
        const savedmember = await newstaffmember.save();
        res.status(201).json(savedmember);
      
      } catch (error) {
        next(error);
       
      }



}
