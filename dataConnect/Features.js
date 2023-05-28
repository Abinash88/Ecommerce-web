import mongoose from "mongoose"
import { serialize } from "cookie"
import Jwt from "jsonwebtoken"
import { Buyers } from "@/myModel/buyers"


export const mongoDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URL, {
        dbName: 'EcommerceDB',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`Database is connected to ${connection}`)
}


export const GetToken = (id) => {
    return Jwt.sign({ id }, process.env.JWT_SECRET);
}

export const CookieSetter = (res, token, set) => {
    res.setHeader('set-Cookie', serialize('token', set ? token : '', {
        path: '/',
        httpOnly: true,
        maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    }))

}

export const jwtVerify = async (req) => {
    const cookie = req.headers.cookie;
    const token = cookie?.split('=')[1]
    if(!token) return null;
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    return await Buyers.findById(decoded.id);
}