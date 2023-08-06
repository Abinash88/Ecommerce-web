"use client";

import { Inter } from "next/font/google";
import {useSelector } from "react-redux";
import Loading from "./Loading";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import PleaseLoginPage from "./PleaseLoginPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { user, status } = useSelector((state) => state.user);
 
 


  return (
    <>
    {user.success ?
      <Layout>
        <div className={`${inter.className} p-5`}>
          <div className="mb-4 w-full rounded-md flex  justify-between bg-yellow-100 p-2">
            <div className="">
              <h3 className="text-[22px]  text-gray-800">
                Welcome <span className="text-gray-800 font-bold">Abinash</span>
              </h3>
            </div>
            <div className=""></div>
          </div>

          <div className="flex justify-around gap-4 flex-wrap">
            <div className="order rounded-sm w-full md:w-[200px] h-[200px] bg-white shadow-md p-2">
              <h3 className="text-center font-bold text-gray-600 text-[17px]">
                Total Order
              </h3>
              <div className="w-full h-[90%] flex items-center justify-center">
                <h2 className="text-[28px] font-bold "> 5</h2>
              </div>
            </div>

            <div className="order rounded-sm w-full md:w-[200px] h-[200px] bg-white shadow-md p-2">
              <h3 className="text-center  font-bold text-red-600 text-[17px]">
                Cancel Order
              </h3>
              <div className="w-full md:w-[200px] h-[90%] flex items-center justify-center">
                <h2 className="text-[28px] font-bold text-red-700"> 0</h2>
              </div>
            </div>

            <div className="order rounded-sm w-full md:w-[200px] h-[200px] bg-white shadow-md p-2">
              <h3 className="text-center font-bold text-gray-600 text-[17px]">
                Total Price
              </h3>
              <div className="w-full md:w-[200px] h-[90%] flex items-center justify-center">
                <h2 className="text-[28px] font-bold ">$ 500</h2>
              </div>
            </div>

            <div className="order rounded-sm w-[200px] h-[200px] bg-white shadow-md p-2">
              <h3 className="text-center font-bold text-green-600 text-[17px]">
                Profit
              </h3>
              <div className="w-full h-[90%] flex items-center justify-center">
                <h2 className="text-[28px] text-green-600 font-bold ">$ 5</h2>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] mt-5 rounded-sm bg-gray-100"></div>
        </div>
      </Layout>
      : <PleaseLoginPage/>
    }

    </>
  );
}
