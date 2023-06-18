"use client";

import { Inter } from "next/font/google";
import Loading from "./Loading";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect } from 'react'
import BuyersFace from './BuyersProducts' 
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import BuyerSideBar from "@/components/BuyerSideBar";
import Layout from "@/components/Layout";

const Home = () => {
  const { status } = useSelector((state) => state.user);
    const { BuyerDatas } = useSelector(state => state.productDatas)
    const router = useRouter();

  // if (status === "loading") {
  //   return <Loading />;
  // }


  return (
    <Layout>
      <div style={{ height: 'calc(100vh - 55px )' }} className="flex overflow-">
        <BuyerSideBar />
        <BuyersFace />
      </div>
    </Layout>
  )
}

export default Home;

