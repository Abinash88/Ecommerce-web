import mongoose from "mongoose"

const WhilistItem = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Buyers',
        required:true,
    }, 
    ProductId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products',
        required:true,
    },
  
})

export  const Whislist = mongoose.models.Whislist || mongoose.model('Whislist', WhilistItem)