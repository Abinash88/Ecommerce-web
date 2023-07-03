import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Headers from "@/components/Headers";
import ProductDetailItem from '@/pages/ProductDetailItem'

const singleProductBox = () => {
  const [ProductDetail, setProductDetail] = useState([]);

  const router = useRouter();
  const id = router.query.id;
  const GetProductDetails = async (id) => {
    try {
      const res = await fetch(`/api/ProductDetail/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!data.success) return [];
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    GetProductDetails(id).then((data) => {
      setProductDetail([data.Product])
    });
  },[]);
  return (
    <>
      <Headers/>
      <div className="">
        <div className="">
        {
          ProductDetail?.map((item) => {
              return <ProductDetailItem key={item?._id} item={item}/>
          })
        }
        </div>
      </div>  
    </>
  );
};

export default singleProductBox;
