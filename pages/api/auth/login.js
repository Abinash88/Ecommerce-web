import { CookieSetter, GetToken, mongoDB } from "@/dataConnect/Features";
import { ErrorMessage, middlewareError } from "@/middleware/Error";
import { Buyers } from "@/myModel/buyers";
import bcrypt from 'bcrypt'

const handler = middlewareError(async (req, res) => {

    if (req.method !== 'POST') return ErrorMessage(res, 400, "Only POST requests are allowed");
    const { email, password } = req.body;
    if (!email || !password) return ErrorMessage(res, 400, "please fill the following fields");
    
    await mongoDB();
    console.log(email, password)

    let user = await Buyers.findOne({ email });
    if (!user) return ErrorMessage(res, 400, "No  users found! Please sign up first");

    const ispassword = await bcrypt.compare(password, user.password);
    if (!ispassword) return ErrorMessage(res, 400, "Email or password not correct");

    const token = GetToken(user._id);
    CookieSetter(res, token, true);
    res.status(200).json({
        success: true,
        message: "Login successfully",
    })
})

export default handler;