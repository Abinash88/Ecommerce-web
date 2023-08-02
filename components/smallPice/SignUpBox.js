import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountIn } from "@/ReduxStore/ToggleSlice";
import { useRouter } from "next/router";
import { getUser } from "@/ReduxStore/UserSlice";
import Loading from "@/pages/Loading";

const SignUpBox = ({ AccountBtn, Logoutbox }) => {
  const loginboxOutClick = useRef(null);
  const [ImageBox, setImageBox] = useState("");
  const inputImageFile = useRef(null);
  const { user, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { isAccount } = useSelector((state) => state.toggle);
  const router = useRouter();


  useEffect(() => {
    dispatch(getUser());
  },[]);



  const OpenFile = () => {
    inputImageFile.current.click();
  };

  const handleFileChange = (e) => {
    const data = e.target.files[0];
    setImageBox(URL.createObjectURL(data));
  };

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (
        loginboxOutClick.current &&
        !loginboxOutClick.current.contains(e.target) &&
        !AccountBtn?.current.contains(e.target)
      ) {
        dispatch(AccountIn(false));
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);





  return (
    <div
      ref={loginboxOutClick}
      className={`md:absolute relative ${
        isAccount ? " h-[300px] border" : "h-[0] "
      } overflow-hidden transition-all duration-300 w-full md:w-[250px]   md:top-[3.4rem] bg-white   right-0`}
    >
      <div className="flex  items-center px-2 py-4 justify-start">
        <div onClick={OpenFile} className="rounded-full w-12 h-12 bg-black">
          <img
            className="rounded-full w-full h-full"
            src={`${ImageBox ? ImageBox : "/user-image.png"}`}
            alt=""
          />
          <input
            ref={inputImageFile}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div className="text-left ml-3  ">
          <h4 className="font-bold text-[14px] text-gray-600 ">
            {user.success ? user.user.name : "User"}
          </h4>
          <h5 className="font-semibold text-[13px]">
            {user.success ? user.user.email : "email"}
          </h5>
        </div>
      </div>
      <div className="px-2 py-4 flex flex-col">
        {user.success ? (
          <Link
            onClick={() => dispatch(AccountIn())}
            href={router.pathname === '/' ? `/Home` : '/'}
            className="switchBuyer"
          >
            {router.pathname === '/'? 'Seller Mode' : 'Buyer Mode'}
          </Link>
        ) : null}

        <div className="">
          {user.success ? (
            <button
              className="px-5 py-2 w-full rounded-md border border-gray-400 text-black hover:bg-gray-300 font-semibold "
              onClick={() => Logoutbox()}
            >
              Logout
            </button>
          ) : (
            <button
              className="px-5 py-2 w-full rounded-md border border-gray-300 text-black hover:bg-gray-100 font-semibold "
              onClick={() => router.push("/Login")}
            >
              LogIn
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpBox;
