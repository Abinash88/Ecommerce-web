"use client"

import Image from "next/image";
import { Inter } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/ReduxStore/UserSlice";
import { useEffect } from "react";
import Loading from "./Loading";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, status } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "rejected") {
    return router.push('/Login');
  }
  if(!user) {
    return router.push('/Login');
  }
 
  return (
    <>
      <Layout>
        <div className={`${inter.className}`}>
          <div className="">

          </div>
        </div>
      </Layout>
    </>
  );
}
