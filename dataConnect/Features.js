import mongoose from "mongoose"
import { serialize } from "cookie"
import Jwt from "jsonwebtoken"
import { Buyers } from "@/myModel/buyers"
// import multer from "multer"


export const mongoDB = async () => {
   await mongoose.connect(process.env.MONGO_URL, {
        dbName: 'EcommerceDB',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`Database is connected `)
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
    if (!token) return null;
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    return await Buyers.findById(decoded.id);
}



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date.now().toISOString() + '-' + file.originalname);
//     }
// })

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//         cb(null, true)
//     } else {
//         ({ 'error': 'Unsupported file format. Upload only jpeg and png'})
//     }
// }

// export const upload = multer({
//     storage,
//     limits: { fileSize: 1024 * 1024 },
//     fileFilter
// }).single('files')

