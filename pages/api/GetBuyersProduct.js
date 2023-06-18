import { mongoDB } from "@/dataConnect/Features";

const { middlewareError, ErrorMessage } = require("@/middleware/Error");
const { Products } = require("@/myModel/DataSchema");



const handler = middlewareError(async ( req, res ) => {
    if(req.method !== 'GET') return ErrorMessage(res, 400, 'GET method only supported')
    await mongoDB();
    const product = await Products.find();
    console.log(product)
    res.status(200).json({success: true, message:"successfull", product})
})

export default handler;