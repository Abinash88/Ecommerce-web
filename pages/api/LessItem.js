import { Cart } from "@/myModel/myCart";

const { ErrorMessage, middlewareError } = require("@/middleware/Error")


const handler = middlewareError(async (req, res) => {
    if (req.method !== 'PUT') return ErrorMessage(res, 400, 'PUT method only supported')

    const id = req.headers.id
    const cart = await Cart.updateOne(
        { product: id,  items: { $gt: 1 } },
         { $inc: { items: -1 } }
        )

    res.status(200).json({ success: true, message: 'item decreased successfully' })
});


export default handler;