const { middlewareError } = require("@/middleware/Error");
const { Whislist } = require("@/myModel/whislistSchema");


const handler = middlewareError(async(req, res) => {
    const {userid, productid} = req.headers;
    if(userid && productid) {
        const data = await Whislist.findOne({ProductId:productid, userId:userid});
            console.log(data,'added')
            if(!data) {
            const whislist = await Whislist.create({
                userId:userid,
                ProductId:productid,
                added:true,
            });
            res.status(200).json({success:true, message:'Added to Whislist', whislist})
        }else{
            const whislist = await Whislist.deleteOne({ProductId:productid, userId:userid});
            res.status(200).json({success:true, message:'Removed from Whislist', whislist})
        }

    } else{
        res.status(403).json({success:false, message:'No data Founds'})
    }
})

export default handler;
