import { jwtVerify } from "@/dataConnect/Features";
import { Products } from "@/myModel/DataSchema";
const { middlewareError, ErrorMessage } = require("@/middleware/Error");


const handler = middlewareError(async (req, res ) =>{
    if(req.method !== "GET") return ErrorMessage(res, 400, 'GET method only supported');
    const user =await jwtVerify(req);
    if(!user) return ErrorMessage(res, 400, 'Please Login First.')
    const data = await Products.find({users:user._id});
    res.status(200).json({success:true, message:'successfull', data})
    
})

export default handler;