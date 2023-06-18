import { HandleUpload, runMiddleware } from "@/dataConnect/Cloudinary";
import { jwtVerify, mongoDB, upload } from "@/dataConnect/Features";
import { ErrorMessage, middlewareError } from "@/middleware/Error";
import { Products } from "@/myModel/DataSchema";
import multiparty from 'multiparty'
import cloudinary from "@/dataConnect/Cloudinary";



const handler = middlewareError(async (req, res) => {
   if (req.method !== "POST") return ErrorMessage(res, 400, 'Only POST requests supported');

   const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
           return resolve({fields, files});
        })
    })
    console.log('length: ', files.file[0].path, 'and ', fields);
    const {name, price, description, country, decreasePrice, catagory} = fields
    
    console.log(name[0], price[0], description[0], country[0], decreasePrice[0], catagory[0])
   if (!name[0] || !price[0] || !description[0] || !country[0] || !decreasePrice[0] || !catagory[0] ) return ErrorMessage(res, 400, 'Please fill up the fields!');

      // await mongoDB();

   const user = await jwtVerify(req)
   if (!user) return ErrorMessage(res, 400, 'Please Login first')
   const image = files.file[0].path;
   
   const datas =await cloudinary.uploader.upload(image, {
         folder: 'ProductImage',
         resource_type: 'auto',
         tags: [user._id],
      });
   const product = new Products({
      name:name[0],
      description:description[0],
      catagory:catagory[0],
      price:price[0],
      country:country[0],
      decreasePrice:decreasePrice[0],
      image:{
         public_id:datas.public_id,
         url:datas.url,
      },
      users:user._id,
      select:false,
   })
      await product.save();
      
      res.status(200).json({ success: true, message: 'Product Added successfully' })
});

export default handler;

export const config = {
   api: { bodyParser: false },
}