import Layout from "@/components/Layout"
import Link from "next/link"
import { useRef } from "react"

const AddProduct = () => {
    const clickImageFile = useRef(null);

    const getImage = () => {
        clickImageFile.current.click();
    }

    const GetImageData = (e) => {
        const data = e.target.files[0]
        console.log(URL.createObjectURL(data).mimetype);

    }

  return (
    <>
        <Layout>
            <div className="p-4 w-[100%]">
                <div className="w-[100%]">
                    <div className=" mb-5">
                        <Link className="px-4 py-2 bg-blue-600 text-white rounded-md font-bold cursor-pointer hover:bg-blue-700" href={'/Products'}>Back</Link>
                    </div>
                    <div className="w-[100%] flex justify-start">
                        <form action="#" className="flex w-[60%] flex-col">
                            <label className="text-[15px] font-semibold mt-2 text-gray-600" htmlFor="">Name</label>
                            <input className="w-full py-2 px-3 border rounded-sm my-2" type="text" placeholder="Product Name" />
                            <label className="text-[15px] font-semibold mt-2 text-gray-600" htmlFor="">Price</label>
                            <input className="w-full py-2 px-3 border rounded-sm my-2" type="text" placeholder="Product Price" />
                            <label className="text-[15px] font-semibold mt-2 text-gray-600" htmlFor="">Description</label>
                            <textarea  className="w-full py-2 px-3 border rounded-sm my-2" type="text" placeholder="Product Description"></textarea>
                            <label className="text-[15px] font-semibold my-2 text-gray-600" htmlFor=""> Image</label>

                            <div className="">
                                <input onChange={GetImageData}  ref={clickImageFile} className="hidden" type="file" />
                                <div onClick={getImage} className="w-[90px] h-[90px] border border-gray-400 cursor-pointer">

                                </div>
                            </div>
                            

                        </form>
                        <div className="p-5">SHOW BOX</div>
                    </div>
                </div>
            </div>
        </Layout>   
    </>
  )
}

export default AddProduct