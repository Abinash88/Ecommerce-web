import { Cart } from "@/myModel/myCart";

const { middlewareError } = require("@/middleware/Error")


const handler = async(req, res) => {
    if(req.method !== 'PUT') return middlewareError(res, 400, 'PUT request only allowed')

    const id = req.headers.id
     await Cart.deleteOne({product:id})
    res.status(200).json({success:true, message:'Item deleted successfully'})
};

export default handler;