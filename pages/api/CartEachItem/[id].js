import { Cart } from "@/myModel/myCart";
const { middlewareError, ErrorMessage } = require("@/middleware/Error");

const handler = middlewareError(async (req, res ) => {
    if(req.method !== "GET" ) return ErrorMessage(res, 400, 'GET method only supported!')

    const {id} = req.query;
    const counts = await Cart.find({product:id})
    res.status(200).json({succcess:true, message:'successfully get data', counts})

})

export default handler;