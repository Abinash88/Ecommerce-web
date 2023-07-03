import { Cart } from "@/myModel/myCart";

const { ErrorMessage, middlewareError } = require("@/middleware/Error")


const handler = middlewareError(async (req, res) => {
    if(req.method !== 'PUT') return ErrorMessage(res, 400, 'PUT method only supported')

    const id = req.headers.id
    await Cart.updateOne({product:id},{$inc:{items:1}})

    res.status(200).json({success: true, message:'item increased successfully'})
});


export default handler;