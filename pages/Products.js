import Layout from "@/components/Layout";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { updateGet } from "@/ReduxStore/updateSlice";
import { getProducts } from "@/ReduxStore/ProductDataSlice";

const Products = () => {
  let num = 1;
  const [setCheck, setSetCheck] = useState(false);
  const dispatch = useDispatch();
  const { productDatas, status } = useSelector((state) => state.productDatas);

  // function for deleting the  Product in product section
  const DeleteProducts = async () => {
    try {
      const res = await fetch("/api/DeleteProduct", {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      toast.success(data.message);
      setSetCheck(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  //fucntion for checking true to the checkbox of product so we can delete it
  const ProductCheck = async (id) => {
    console.log('productcheck')
    dispatch(updateGet(id));
  };
  
  useEffect(() => {
    dispatch(getProducts());
    }, [ProductCheck, setCheck]);

  // function for changing the all tick in the product box at once
  const changeAll = async (e) => {
    const isChecked = e.target.checked;
    setSetCheck(e.target.checked)
    try {
      const res = await fetch(`/api/UpdateItem`, {
        method: "PUT",
        body: JSON.stringify(isChecked),
      });
      const data = await res.json();
      if (!data.success) console.log(data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  const isSelected = productDatas?.data?.some((item) => item.select);

  return (
    <>
      <Layout>
        <div className="p-4">
          <div className="flex justify-between">
            <Link
              href={"AddProduct"}
              className="px-4 py-2 bg-blue-600 text-white rounded-md font-bold cursor-pointer hover:bg-blue-700"
            >
              Add Products
            </Link>
            {isSelected ? (
              <button
                onClick={DeleteProducts}
                className="mr-9 px-5 py-2 font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-md"
              >
                Delete
              </button>
            ) : null}
          </div>
          <div className="productsList mt-5 ">
            <div className="">
              <table className="table-auto w-full  border-collapse">
                <thead>
                  <tr>
                    <th className="border border-2 border-gray-200 bg-gray-100">
                      <input
                        type="checkbox"
                        onChange={(e) => changeAll(e)}
                        className="w-[18px] h-[18px]"
                        checked={setCheck}
                      />
                    </th>
                    <th className="border border-2 border-gray-200 bg-gray-100">
                      ID
                    </th>
                    <th className="border border-2 border-gray-200 bg-gray-100">
                      Name
                    </th>
                    <th className="border border-2 border-gray-200 bg-gray-100">
                      PRICE
                    </th>
                    <th className="border border-2 border-gray-200 bg-gray-100">
                      DESCRIPTION
                    </th>
                    <th className="border border-2 border-gray-200 bg-gray-100">
                      IMAGE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productDatas?.data?.map((product) => {
                    return (
                      <>
                        {status === "loading" ? (
                          <Loading />
                        ) : (
                          <tr key={product._id} className="text-center">
                            <td className="border px-4 py-2">
                              <input
                                type="checkbox"
                                onChange={() => ProductCheck(product._id)}
                                checked={product.select}
                                className="w-[18px] h-[18px]"
                              />
                            </td>
                            <td className="border font-semibold px-4 py-2">
                              {num++}.
                            </td>
                            <td className="border px-4 py-2 text-left font-semibold text-[14px]">
                              {product?.name.substring(0, 20)}
                            </td>
                            <td className="border px-4 py-2 text-left font-semibold">
                              ${product?.price}
                            </td>
                            <td className="border px-4 py-2 text-left font-semibold text-[14px]">
                              {product.description.substring(0, 30)}...
                            </td>
                            <td className="border flex justify-center">
                              <img
                                className="w-20"
                                src={product?.image.url}
                                alt=""
                              />
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Products;
