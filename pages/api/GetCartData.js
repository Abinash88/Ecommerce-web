import { middlewareError } from "@/middleware/Error"
import { Cart } from "@/myModel/myCart";

const handler = middlewareError(async (req, res) => {
    
    const cartitem = await Cart.find();
    console.log(cartitem);
    res.status(200).json({success: true, message:'Item gets successfully', cartitem})
})

export default handler;