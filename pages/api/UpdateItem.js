import { jwtVerify } from "@/dataConnect/Features";
import { ErrorMessage, middlewareError } from "@/middleware/Error";
import { Products } from "@/myModel/DataSchema";
import bodyParser from "body-parser";


const handler = middlewareError(async(req, res) => {
    if(req.method !== 'PUT') return ErrorMessage(res, 400, "PUT request method not supported");
    const check = req.body;
    const user =await jwtVerify(req);
    if(!user) return ErrorMessage(res, 400, "Please Login first!")
    const data = await Products.find({users:user._id});
    if(!data) return ErrorMessage(res, 400, 'Please Login');
    const datas = data.map(item => {
       item.select = check;
        return item;
    });
    await Products.create(datas)
    res.status(200).json({
        success:true,
        message:user,
    })
})

export default handler;