import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLength:[5, "password too short"],
    }
});

export const Buyers = mongoose.models.Buyers || mongoose.models('Buyers',buyerSchema);