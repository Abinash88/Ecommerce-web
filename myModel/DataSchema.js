import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    select:{
        type:Boolean,
        default:true,
    },
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Buyers',
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },

    image:{
       public_id:{
        type:String,
        required:true,
       },
       url:{
        type:String,
        required:true,
       }

    },
    country:{
        type:String,
        required:true,
    },
    decreasePrice:{
        type:Number,
        required:true,
    },
    catagory:{
        type:String,
        required:true,
    }
})

export const Products =mongoose.models.Products ||  mongoose.model('Products', ProductSchema);

