import { jwtVerify } from "@/dataConnect/Features";
import { Products } from "@/myModel/DataSchema";
import cloudinary from "@/dataConnect/Cloudinary";

const { middlewareError, ErrorMessage } = require("@/middleware/Error");

    const handler = middlewareError(async (req, res) =>  {
        if(req.method !== 'DELETE') return ErrorMessage(res, 400, "DELETE request method Only supported");
        const user =await jwtVerify(req);

        if(!user) return ErrorMessage(res, 400, "Please Login first!")
        const publicId = await Products.findOne({users:user._id});

        const deleteimage = await cloudinary.uploader.destroy(publicId.image.public_id);
        let data = await Products.deleteMany({users:user._id, select:true});
        console.log(deleteimage, 'image deleted successfully');
        if(!data) return ErrorMessage(res, 400, "Please Login first!")
        
        console.log(data);
        res.status(200).json({success:true, message:"Deleted successfully"})
        
    });


export default handler;