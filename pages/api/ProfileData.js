import { jwtVerify } from "@/dataConnect/Features";
import {middlewareError} from "@/middleware/Error"
import { ErrorMessage } from "@/middleware/Error"


const handler = middlewareError(async(req, res) => {
    if(req.method !== 'GET') return ErrorMessage(res, 400, "Get request method not supported");
    const user =await jwtVerify(req);
    if(!user) return ErrorMessage(res, 400, "Please Login first!")
    res.status(200).json({
        success:true,
        message:'Get user successfully',
        user
    })
})

export default handler;