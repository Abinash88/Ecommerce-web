import { Products } from "@/myModel/DataSchema";
import { Whislist } from "@/myModel/whislistSchema";

const { middlewareError } = require("@/middleware/Error");


const handler = middlewareError(async(req, res) => {
    if(req.method !== 'GET' ) return res.status(400).json({success:false, message:'Get Method only allowed'})
    const  bothid = req.headers;
    if(bothid?.userid) {
        const ids = await Whislist.find({userId:bothid.userid});
        const data =  await Promise.all(ids.map((item) => {
            return  Products.findById(item.ProductId)
        }))
        res.status(200).json({success: true, message:"successfull Get whislist data", product:data})
    }else{
        res.status(400).json({success:false, message:'no Data Fround!'})
    }
})

export default handler;

