import { Products } from "@/myModel/DataSchema";

const { middlewareError, ErrorMessage } = require("@/middleware/Error");


const handler = middlewareError(async (req, res) => {
    if(req.method !== "GET") return  ErrorMessage(res, 400, 'GET method only supported') ;
    const ids = req.query;
    const Product = await Products.findById(ids.id);
    console.log(Product,'product')
    if(!Product) return ErrorMessage(res, 404, 'Product not found');
    res.status(200).json({success:true, message:'Found product', Product})
})

export default handler; 