import { CookieSetter, GetToken, mongoDB } from "@/dataConnect/Features";
import { ErrorMessage, middlewareError } from "@/middleware/Error";
import { Buyers } from "@/myModel/buyers";
import bcrypt from 'bcrypt'


const handler = middlewareError(async (req, res) => {
    if (req.method !== 'POST') {
        return ErrorMessage(res, 400, 'Only Post method is allowed');
    }
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return ErrorMessage(res, 400, 'Please Fill up the fields below');
    }
    await mongoDB();
    let user = await Buyers.findOne({ email });
    console.log(user);
    if (user) return ErrorMessage(res, 400, "Email already in use");
    

    const hashpassword = await bcrypt.hash(password, 10);
    user = await Buyers.create({
        name,
        email,
        password: hashpassword,
    });

    const token = GetToken(user._id);

    CookieSetter(res, token, true);
    res.status(201).json({
        success: true,
        message: "SignUp successfully"
    })


});

export default handler;