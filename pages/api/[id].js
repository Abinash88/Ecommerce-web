import { Products } from "@/myModel/DataSchema";

const { middlewareError, ErrorMessage } = require("@/middleware/Error");


const handler = middlewareError(async (req, res) => {
    if (req.method !== 'PUT') return ErrorMessage(res, 400, 'PUT method only supported');
    const ids = req.query.id;
    const data = await Products.findById(ids)
    if (!data) return ErrorMessage(res, 400, 'Item not found');
    data.select = !data.select;
    await data.save();
    res.status(200).json({ success: true, message: 'items marked as success', data:data.select});
})

export default handler;
