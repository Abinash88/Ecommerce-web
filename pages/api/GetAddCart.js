import { Products } from "@/myModel/DataSchema";
import { Cart } from "@/myModel/myCart";
const { middlewareError, ErrorMessage } = require("@/middleware/Error");

const handler = middlewareError(async (req, res) => {
    if (req.method !== "GET") return ErrorMessage(res, 400, 'GET method only supported')

    const cart = await Cart.find();
    const cartid = cart.map((item) => {
        return item.product
    })
    
    const product = await Products.find({
        _id: { $in: cartid }
    })
    res.status(200).json({ success: true, message: "Data added in cart successfully", product })

})

export default handler;