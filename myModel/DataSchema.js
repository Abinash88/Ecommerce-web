import mongoose, { Mongoose } from "mongoose";

const imageSchema = new mongoose.Schema({
    name:String,
    image:{
        data:Buffer,
        contentType:String,
    }
})

export const Image = mongoose.models.Image || Mongoose.model('Image', imageSchema);

