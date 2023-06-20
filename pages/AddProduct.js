import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";


const AddProduct = () => {
  const clickImageFile = useRef(null);
  const [image, setimage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [catagory, setCatagory] = useState("");
  const [country, setCountry] = useState("");
  const [decreasePrice, setdecreasePrice] = useState("");
  const [file, setfile] = useState();
  const getImage = () => {
    clickImageFile.current.click();
  };

  const GetImageData = async (e) => {
    const files = e.target?.files[0];
    const data = URL.createObjectURL(files);
    setimage(data);
    setfile(files)
  };


  const SubmitData = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append('file', file);
      formdata.append('name', name);
      formdata.append('description', description);
      formdata.append('price', price);
      formdata.append('decreasePrice', decreasePrice);
      formdata.append('country', country);
      formdata.append('catagory', catagory);
      const res = await fetch("http://localhost:3000/api/auth/ProductData", {
        method: 'POST',
        body: formdata
      });

      const datas = await res.json();
      if (!datas.success) return toast.error(datas.message);
      toast.success(datas.message);
      setName("");
      setDescription("");
      setPrice("");
      setimage("");
      setCatagory('')
      setCountry('')
      setdecreasePrice('')
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Layout>
        <div className="p-4 w-[100%]">
          <div className="w-[100%]">
            <div className=" mb-5">
              <Link
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-bold cursor-pointer hover:bg-blue-700"
                href={"/Products"}
              >
                Back
              </Link>
            </div>
            <div className="w-[100%] flex justify-start">
              <form
                onSubmit={SubmitData}
                className="flex w-[60%] items-start flex-col"
              >
                <label
                  className="text-[15px] font-semibold my-2 text-gray-600"
                  htmlFor=""
                >
                  {" "}
                  Products Image
                </label>
                <div className="">
                  <input
                    onChange={GetImageData}
                    ref={clickImageFile}
                    className="hidden"
                    type="file"
                  />
                  <div
                    onClick={getImage}
                    className="w-[80px] h-[80px] border border-gray-400  bg-gray-100 hover:bg-gray-200 flex rounded-md items-center justify-center cursor-pointer"
                  >
                    <ArrowDownTrayIcon className="h-9 text-gray-700" />
                  </div>
                </div>

                <label
                  className="text-[15px] font-semibold mt-2 text-gray-600"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="name"
                  name="name"
                  className="w-full py-2 px-3 border rounded-sm my-2"
                  type="text"
                  placeholder="Product Name"
                />
                <label
                  className="text-[15px] font-semibold mt-2 text-gray-600"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  name="price"
                  id="price"
                  className="w-full py-2 px-3 border rounded-sm my-2"
                  type="number"
                  placeholder="Product Price"
                />
                <label
                  className="text-[15px] font-semibold mt-2 text-gray-600"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  name="description"
                  id="description"
                  className="w-full py-2 px-3 border rounded-sm my-2"
                  type="text"
                  placeholder="Product Description"
                ></textarea>

                <label
                  className="text-[15px] font-semibold my-2 text-gray-600"
                  htmlFor="catagory"
                >
                  Catagory
                </label>

                <select onChange={(e) => setCatagory(e.target.value)}
                  value={catagory}
                  name="catagory"
                  className="w-full py-2 px-3 border text-gray-600 font-semibold rounded-sm my-2">
                  <option className="text-gray-500 font-semibold">Select..</option>
                  <option className="text-gray-500 font-semibold">Women's Fashion</option>
                  <option className="text-gray-500 font-semibold">Men's Fashion</option>
                  <option className="text-gray-500 font-semibold">Electronic Devices</option>
                  <option className="text-gray-500 font-semibold">Groceries & Pets</option>
                  <option className="text-gray-500 font-semibold">Babies & Toys</option>
                  <option className="text-gray-500 font-semibold">Home & Lifestyle</option>
                  <option className="text-gray-500 font-semibold">Sports & Outdoor</option>
                  <option className="text-gray-500 font-semibold">Motors, Tools & DIY</option>
                </select>

                <label
                  className="text-[15px] font-semibold my-2 text-gray-600"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  name="country"
                  type="text"
                  className="w-full py-2 px-3 border rounded-sm my-2"
                  placeholder="Country of this product.."
                />

                <label
                  className="text-[15px] font-semibold my-2 text-gray-600"
                  htmlFor="decreaseprice"
                >
                  Decrease Price
                </label>
                <input
                  onChange={(e) => setdecreasePrice(e.target.value)}
                  value={decreasePrice}
                  name="decreasePrice"
                  type="number"
                  className="w-full py-2 px-3 border rounded-sm my-2"
                  placeholder="Price for cross..."
                />




                <button
                  type="submit"
                  className="mt-4 py-3 px-5 rounded-sm text-white bg-green-600"
                >
                  Submit
                </button>
              </form>


              <div className="p-5 flex-1 flex items-center justify-center ">
                <div className="box overflow-hidden w-[250px] h-[320px] rounded-sm bg-gray-100">
                  <div className="w-full h-[50%]">
                    {image ? (
                      <img className="w-full h-full" src={image} alt="" />
                    ) : null}
                  </div>
                  <div className="text-center px-2">
                    <h4 className="text-[18px] mt-2 text-gray-700 font-bold ">
                      {" "}
                      {name?.substring(0, 24)}
                      {name?.length > 24 && "..."}
                    </h4>
                    <p className="text-[15px] py-1  font-semibold text-gray-500">
                      {" "}
                      {description?.substring(0, 70)}
                      {description?.length > 70 && "..."}{" "}
                    </p>
                    <h3
                      className={`${price
                        ? "text-[17px] font-semibold bg-blue-700  text-white mt-3 inline-block px-3 py-1 rounded-sm"
                        : null
                        }`}
                    >
                      {price?.length > 0 ? "Rs." : null}
                      {price?.substring(0, 20)}{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddProduct;
