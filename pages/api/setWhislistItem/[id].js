import Products  from "@/myModel/DataSchema";
import { Buyers } from "@/myModel/buyers";
import { Whislist } from "@/myModel/whislistSchema";

const { middlewareError } = require("@/middleware/Error");


const handler = middlewareError(async(req, res) => {
    if(req.method !== 'GET' ) return res.status(400).json({success:false, message:'Get Method only allowed'})
    const {id} = req.query;
    
    const user = await Buyers.find();
    const product = await Products.findById(id);
    if(!user) return res.status(404).json({success:false, message:'Login for setting whislist'});
    await Whislist.create({
        userId:user._id,
        ProductId:product._id
    })
    res.status(200).json({success: true, message:"successfull added to whislist"})
})

export default handler;