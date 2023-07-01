import mongoose from "mongoose"

const cartItem = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products',
        required:true,
    },
    items:{
        type:Number,
        required:true,
    },
    whislist:{
        type:Boolean,
        required:true,  
    }
})

export const Cart = mongoose.models.Cart || mongoose.model('Cart', cartItem)