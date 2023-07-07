import Products  from "@/myModel/DataSchema";

const { middlewareError } = require("@/middleware/Error");


const handler = middlewareError(async(req, res) => {
    if(req.method !== 'GET' ) return res.status(400).json({success:false, message:'Get Method only allowed'})
    
    const product = await Products.find({});
    res.status(200).json({success: true, message:"successfull", product})
})

export default handler;