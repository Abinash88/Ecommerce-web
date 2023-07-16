"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect } from 'react'
import BuyersFace from './BuyersProducts' 
import BuyerSideBar from "@/components/BuyerSideBar";
import Headers from "@/components/Headers";
import { useDispatch, useSelector } from "react-redux";
import { GetWhislist } from "@/ReduxStore/GetWhislistProduct";

const Home = () => {
  const { user, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(GetWhislist(user?.user?._id))
},[])

  return (
    <>
    <Headers/>
      <div style={{ height: 'calc(100vh - 55px )' }} className="flex w-[100%] overflow-">
        <BuyerSideBar />
        <BuyersFace />
      </div>
    </>
  )
}

export default Home;

