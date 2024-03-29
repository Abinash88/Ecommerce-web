import { Cart } from "@/myModel/myCart";
const { middlewareError, ErrorMessage } = require("@/middleware/Error");

const handler = middlewareError(async (req, res) => {
    if (req.method !== "GET") return ErrorMessage(res, 400, 'GET method only supported')
    const {id} = req.headers;
    const cart = await Cart.find({userId:id});
    
    res.status(200).json({ success: true, message: "Data added in cart successfully", CartItemCount:cart})
})

export default handler;