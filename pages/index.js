"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect } from 'react'
import BuyersFace from './BuyersProducts' 
import BuyerSideBar from "@/components/BuyerSideBar";
import Headers from "@/components/Headers";

const Home = () => {
 
  return (
    <>
    <Headers/>
      <div style={{ height: 'calc(100vh - 55px )' }} className="flex overflow-">
        <BuyerSideBar />
        <BuyersFace />
      </div>
    </>
  )
}

export default Home;

