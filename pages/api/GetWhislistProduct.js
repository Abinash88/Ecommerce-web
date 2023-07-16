const { middlewareError } = require("@/middleware/Error");
const { Whislist } = require("@/myModel/whislistSchema");


const handler = middlewareError(async(req, res) => {
    const {userid, productid} = req.headers;
    if(userid && productid) {
        const data = await Whislist.findOne({ProductId:productid});
        if(!data) {
            const whislist = await Whislist.create({
                userId:userid,
                ProductId:productid,
            });
            res.status(200).json({success:true, added:true, message:'Added to Whislist', whislist})
        }else{
            const whislist = await Whislist.deleteOne({ProductId:productid});
            res.status(200).json({success:true, added:false, message:'Removed from Whislist', whislist})
        }

    } else{
        res.status(403).json({success:false, message:'No data Founds'})
    }
})

export default handler;
