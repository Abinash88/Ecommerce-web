import { Products } from "@/myModel/DataSchema";
import { Whislist } from "@/myModel/whislistSchema";

const { middlewareError } = require("@/middleware/Error");


const handler = middlewareError(async(req, res) => {
    if(req.method !== 'GET' ) return res.status(400).json({success:false, message:'Get Method only allowed'})
    const  {userid} = req.headers;
    if(userid) {
        const ids = await Whislist.find({userId:userid});
        console.log(ids);
        const data = await Products.findById(ids[0].ProductId)
        const product = [data];
        res.status(200).json({success: true, message:"successfull Get whislist data", product})
    }else{
        res.status(403).json({success:false, message:'no Data Fround!'})
    }
})

export default handler;