import { CookieSetter } from "@/dataConnect/Features";

const { middlewareError, ErrorMessage } = require("@/middleware/Error");


const handler = middlewareError(async(req, res) => {
    if(req.method !== "GET") return ErrorMessage(res, 400, "GET method not supported");

    const logout = CookieSetter(res, null, false);
    console.log(logout);
    res.status(200).json({
        success:true,
        message:"Logout successfully"
    })
})

export default handler;