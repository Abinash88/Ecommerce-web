import { middlewareError } from "@/middleware/Error";
import { Cart } from "@/myModel/myCart";

const handler = middlewareError(async (req, res) => {

    const data = req.body;
    const item = await Cart.findOne({ product: data.id , userId:data.userId});
    if (item) {
        await Cart.updateOne({product:data.id, userId:data.userId}, {$inc:{items:data.counts}})
    }else{
        const cart = await Cart.create({
            product: data.id,
            userId:data.userId,
            items: data.counts,
        })
        
        res.status(200).json({ success: true, message: 'Item Added to Cart' })
    }
    res.status(200).json({ success: true, message:'More number added'})
})

export default handler;