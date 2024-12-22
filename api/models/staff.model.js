
import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({

  username:{

        type:String,
        required:true,
        

    },

  
    password: { type: String, required: true },







   
   
},{timestamps:true})

const Fbuser = mongoose.model('Fbuser',staffSchema);
export default Fbuser;