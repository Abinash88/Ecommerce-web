import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const singleProductBox = () => {
  const [ProductDetail, setProductDetail] = useState();

  const router = useRouter();
  const id = router.query.id;
  const GetProductDetails = async (id) => {
    console.log(id);
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
      console.log(data.prouct);
    }, []);
  });

  return (
    <Layout>
      
    </Layout>
  );
};

export default singleProductBox;
