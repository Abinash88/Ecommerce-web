import Link from "next/link";
import {
  CursorArrowRippleIcon,
  HeartIcon,
  BanknotesIcon,
  ArrowTrendingDownIcon,
  UserIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

const Headers = () => {
    const outclickOff = useRef(null);
    const [popupAccount, setPopupAccount] = useState(false)
    const [popupResponsiveBar, setPopupResponsiveBar] = useState(false);

    const HandleAccountPopUp = () => {
        setPopupAccount(!popupAccount)
    }

    const HandleResponsiveBars = (e) =>  {
        
    }


  return (
    <>
      <div className="w-screen  h-auto bg-gray-100">
        <div className={`flex py-2 md:py-0 justify-between items-center px-10`}>
          <div className="flex items-center">
            <Link href={"/"}>
              <h2 className="logo">Ecom-web</h2>
            </Link>
          </div>
            <div className={`absolute right-10 md:hidden block`}>
                <Bars3Icon onClick={HandleResponsiveBars} className="h-9 cursor-pointer"/>
            </div>
          <nav className={`navs md:relative w-[300px] md:w-[unset] h-[auto] absolute flex items-center`}>
            <ul className="flex flex-col md:flex-row">
              <li>
                <Link className={`links text-gray-600 hover:bg-blue-600 hover:text-white space-x-5 `} href={"/"}>
                  <CursorArrowRippleIcon className="h-5 " />
                  Niches
                </Link>
              </li>
              <li>
                <Link className={`links text-gray-600 hover:bg-blue-600 hover:text-white space-x-5 `} href={"/"}>
                  <HeartIcon className="h-5" />
                  Whislist
                </Link>
              </li>
              <li>
                <Link className={`links text-gray-600 hover:bg-blue-600 hover:text-white space-x-5 `} href={"/"}>
                  <BanknotesIcon className="h-5" />
                  Brand
                </Link>
              </li>
              <li>
                <Link className={`links text-gray-600 hover:bg-blue-600 hover:text-white space-x-5 `} href={"/"}>
                  <ArrowTrendingDownIcon className="h-5" />
                  Help
                </Link>
              </li>
              <li>
                <button ref={outclickOff} onClick={HandleAccountPopUp} className={`links text-gray-600 hover:bg-blue-600 hover:text-white  space-x-5 ${popupAccount ? 'bg-blue-600 text-white' : ''}`} >
                  <UserIcon className="h-5" />
                  Account
                </button>
              </li>
            </ul>
            <div className={`absolute ${popupAccount ? '' :'hidden'} w-[250px] h-[350px] bg-gray-600 top-[53px] right-0`}>
                <div className="p-3">

                </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Headers;
