
import mongoose from "mongoose";

const FbuserSchema = new mongoose.Schema({

  username:{

        type:String,
        required:true,
        

    },

  
    password: { type: String, required: true },







   
   
},{timestamps:true})

const Fbuser = mongoose.model('Fbuser',FbuserSchema);
export default Fbuser;