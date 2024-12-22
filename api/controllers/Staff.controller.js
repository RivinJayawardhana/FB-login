
import Fbuser from "../models/staff.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';

export const add = async(req,res,next)=>{

    
   const username=req.body.username;
  
  const password=req.body.pass;

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
