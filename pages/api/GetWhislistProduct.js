const { middlewareError } = require("@/middleware/Error");
const { Products } = require("@/myModel/DataSchema");
const { Whislist } = require("@/myModel/whislistSchema");


const handler = middlewareError(async(req, res) => {
    const {userId, productId} = req.headers;
    if(userId && productId) {
        const data = await Whislist.findOne({ProductId:productId});
        if(!data) {
             await Whislist.create({
                userId,
                ProductId:data._id,
            });
            res.status(200).json({success:true, added:true, message:'Added to Whislist'})
        }else{
            await Whislist.deleteOne({ProductId:productId});
            res.status(200).json({success:true, added:false, message:'Removed from Whislist'})
        }

    } 
    res.status(403).json({success:false, message:''})
})

export default handler;
