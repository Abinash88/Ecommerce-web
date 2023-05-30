import Link from "next/link";
import {
  CursorArrowRippleIcon,
  HeartIcon,
  BanknotesIcon,
  ArrowTrendingDownIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Logout from "./smallPice/Logout";
import { useRouter } from "next/router";
import { Togglein } from "@/ReduxStore/ToggleSlice";

const Headers = () => {
  // getting user data from redux userslice
  const { user } = useSelector((state) => state.user);
  const router = useRouter();
  const loginboxOutClick = useRef(null);
  const AccountBtn = useRef(null);
  const inputImageFile = useRef(null);
  const [popupAccount, setPopupAccount] = useState(false);
  const [popupResponsiveBar, setPopupResponsiveBar] = useState(false);
  const [ImageBox, setImageBox] = useState("");
  const dispatch = useDispatch();

  const HandleSidebar = () => {
    dispatch(Togglein());
  }

  const HandleAccountPopUp = (e) => {
    setPopupAccount(true);
  };

  const HandleResponsiveBars = () => {
    setPopupResponsiveBar(!popupResponsiveBar);
  };

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (
        loginboxOutClick.current &&
        !loginboxOutClick.current.contains(e.target) && !AccountBtn?.current.contains(e.target)
      ) {
        setPopupAccount(false);
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  const OpenFile = () => {
    inputImageFile.current.click();
  };

  const handleFileChange = (e) => {
    const data = e.target.files[0];
    setImageBox(URL.createObjectURL(data));
  };

  return (
    <>
      <div className="w-screen  h-auto bg-gray-100">
        <div className={`flex py-2 md:py-0 justify-between items-center px-10`}>
          <div className="flex items-center justify-start space-x-2 flex-1">
            <Bars3Icon onClick={HandleSidebar} className="h-8" />
            <Link href={"/"}>
              <h2 className="logo">Ecom-web</h2>
            </Link>
          </div>
          <div className={`absolute right-10 md:hidden block`}>
            <Bars3Icon
              onClick={HandleResponsiveBars}
              className="h-9 cursor-pointer"
            />
          </div>
          <nav
            className={`navs md:relative w-[400px] md:w-[unset] ${popupResponsiveBar ? "h-[350px] " : "h-[0]"
              } right-0 bg-gray-100 md:bg-transparent  overflow-hidden md:overflow-visible top-[3rem] md:top-0 transition-all duration-300 md:h-auto absolute flex items-center`}
          >
            <ul className="flex flex-col md:flex-row">
              <li>
                <Link
                  className={`links text-gray-600 hover:bg-blue-600 hover:text-white space-x-5 `}
                  href={"/"}
                >
                  <CursorArrowRippleIcon className="h-5 " />
                  Niches
                </Link>
              </li>
              <li>
                <Link
                  className={`links text-gray-600 hover:bg-blue-600 hover:text-white space-x-5 `}
                  href={"/"}
                >
                  <HeartIcon className="h-5" />
                  Whislist
                </Link>
              </li>
              <li>
                <Link
                  className={`links text-gray-600 hover:bg-blue-600 hover:text-white space-x-5 `}
                  href={"/"}
                >
                  <BanknotesIcon className="h-5" />
                  Brand
                </Link>
              </li>
              <li>
                <Link
                  className={`links text-gray-600 hover:bg-blue-600 hover:text-white space-x-5 `}
                  href={"/"}
                >
                  <ArrowTrendingDownIcon className="h-5" />
                  Help
                </Link>
              </li>
              <li>
                <button
                  onClick={HandleAccountPopUp}
                  ref={AccountBtn}
                  className={`links  text-gray-600 hover:bg-blue-600 hover:text-white  space-x-5 ${popupAccount ? "bg-blue-600 text-white" : ""
                    }`}
                >
                  <UserIcon className="h-5" />
                  Account
                </button>
              </li>
            </ul>
            <div
              ref={loginboxOutClick}
              className={`md:absolute relative ${popupAccount ? " h-[300px] " : "h-[0] overflow-hidden"
                } transition-all duration-300 w-full md:w-[250px] top-0  md:top-[3.4rem] bg-gray-200 top-[53px] right-0`}
            >
              <div className="flex border-b items-center px-2 py-4 justify-start">
                <div
                  onClick={OpenFile}
                  className="rounded-full w-12 h-12 bg-black"
                >
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
                    {user.success ? user.message.name : "User"}
                  </h4>
                  <h5 className="font-semibold text-[13px]">
                    {user.success ? user.message.email : "email"}
                  </h5>
                </div>
              </div>
              <div className="px-2 py-4">
                <Logout />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Headers;
