import { middlewareError } from "@/middleware/Error";
import multer from "multer";


const ImageSave = middlewareError(async(req, res) => {
    const image = req.body;
    console.log(image)
})

export default ImageSave;