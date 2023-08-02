"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect } from 'react'
import BuyersFace from './BuyersProducts'
import BuyerSideBar from "@/components/BuyerSideBar";
import Headers from "@/components/Headers";
import { useDispatch, useSelector } from "react-redux";
import { GetWhislist } from "@/ReduxStore/GetWhislistProduct";
import HeroPage from "./HeroPage";
import Footer from "./Footer";
import AboutPage from "./AboutPage";

const Home = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);
  
  useEffect(() => {
    dispatch(GetWhislist(user?.user?._id));
  },[user])

  return (
    <>
      <Headers />
      <div style={{ height: 'calc(100vh - 55px )' }} className="flex flex-col w-[100%] ">
        <div className=''>
          <HeroPage/>
        </div>
        <div className="">
         <AboutPage/>
        </div>
        <div id='ProductBox' className='flex w-[100%] '>
        <BuyerSideBar />
        <BuyersFace />
        </div>
        <div className="">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home;

