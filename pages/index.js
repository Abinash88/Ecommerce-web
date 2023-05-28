import Image from "next/image";
import { Inter } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/ReduxStore/UserSlice";
import { useEffect } from "react";
import BuyerSellerPick from "@/components/smallPice/buyerSellerPick";
import Loading from "./Loading";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  if (status === "loading") {
    return <Loading />;
  }
  if (status === "rejected") {
    return <h1></h1>;
  }
  if (!user.success) {
    setTimeout(() => {
      return <BuyerSellerPick inter={inter} />;
    }, 500);
  }
  return (
    <>
      <Layout>
        <h1 className={`${inter.className}`}>main content</h1>
      </Layout>
    </>
  );
}
