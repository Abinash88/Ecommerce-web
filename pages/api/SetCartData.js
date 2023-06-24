import { middlewareError } from "@/middleware/Error"
import { Cart } from "@/myModel/myCart";

const handler = middlewareError(async (req, res) => {
    
    const data = req.body;
    console.log(data    )
    const item = await Cart.findOne({product:data.id});
    if(item){
        await Cart.findOneAndUpdate(
            {product:data.id},
            {$inc:{items:data.counts}},
            {new:true}
        )
    }
    const cart = await Cart.create({
        product:data.id,
        items:data.counts,
    })

    res.status(200).json({success: true, message:'Item Added to Cart'})
})

export default handler;