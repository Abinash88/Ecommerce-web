import Link from "next/link";
import {
  CursorArrowRippleIcon,
  HeartIcon,
  UserIcon,
  Bars3Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AccountIn, Togglein } from "@/ReduxStore/ToggleSlice";
import SignUpBox from "./smallPice/SignUpBox";
import { GetCartTotalcount } from "@/ReduxStore/CartTotalCount";
import { LogoutHandler } from "@/ReduxStore/LogoutSlice";
import Loading from "@/pages/Loading";

const Headers = () => {
  // getting user data from redux userslice
  const router = useRouter();
  const AccountBtn = useRef(null);
  const [popupAccount, setPopupAccount] = useState(false);
  const [popupResponsiveBar, setPopupResponsiveBar] = useState(false);
  const dispatch = useDispatch();
  const responsiveBar = useRef(null);
  const navButton = useRef(null);
  const { cartItem } = useSelector((state) => state.cartItem);
  const { CartCountItem } = useSelector((state) => state.CartCountItem);
  const { user, status } = useSelector((state) => state.user);
  const { logout } = useSelector(state => state.logout)
  const { whislistdata, whislistStatus } = useSelector(state => state.whislistdata)

  const HandleSidebar = () => {
    dispatch(Togglein());
  }

  // reaload after logout function 
  useEffect(() => {
    if (logout) {
      router.reload();
    }
  }, [logout])


  const HandleResponsiveBars = () => {
    setPopupResponsiveBar(!popupResponsiveBar);
  };

  // hook and function for close to the navbar menu while clicking outside start
  useEffect(() => {
    const getResponsive = (e) => {
      if (responsiveBar.current && !responsiveBar.current.contains(e.target) && !navButton.current.contains(e.target)) {
        setPopupResponsiveBar(false)
      }
    }

    document.addEventListener('mousedown', getResponsive);
    return () => {
      document.removeEventListener('mousedown', getResponsive);
    }
  }, [popupResponsiveBar])
  // hook and function for close to the navbar menu while clicking outside end


  const Logoutbox = () => {
    dispatch(LogoutHandler())
  }


  useEffect(() => {
    if (user.success) {
      dispatch(GetCartTotalcount(user?.user?._id));
    }
  }, [])


  return (
    <>
      <div className="w-screen  flex items-center  h-[80px] ">
        <div className={`flex py-2  md:py-0 justify-between w-full items-center px-10`}>
          <div className="flex  items-center justify-start space-x-2 ">
            {router.pathname === '/' || router.pathname === '/singleProductBox/648fc14a59f4d3329e31d88d' ? null :
              <Bars3Icon onClick={HandleSidebar} className="h-8" />
            }
            <Link className="text-[22px] " href={"/"}>
              <span className="logo text-black font-bold">Ecom-web</span>
            </Link>
          </div>
          <div className={`absolute right-10 md:hidden block`}>
            <Bars3Icon
              ref={navButton}
              onClick={HandleResponsiveBars}
              className={`h-9  cursor-pointer`}
            />
          </div>
          <div className='sm:flex hidden '>
            <h2 className="text-[17px] font-semibold p-1 border-2 border-red-600 text-red-500">On Going Project</h2>
          </div>
          <nav ref={responsiveBar}
            className={`navs md:relative w-[400px] md:w-[unset] ${popupResponsiveBar ? "h-[350px] " : "h-[0]"
              } right-0 bg-gray-100 md:bg-transparent  overflow-hidden md:overflow-visible top-[3rem] md:top-0 transition-all duration-300 md:h-auto absolute flex items-center z-20`}
          >
            <ul className="flex flex-col md:flex-row ">
              <li>
                <Link
                  className={`links text-gray-600 hover:text-black space-x-5 `}
                  href={"/"}
                >
                  <CursorArrowRippleIcon className="h-5 " />
                  Products
                </Link>
              </li>
              {/* <li>
                <Link
                  className={`links text-gray-600 hover:text-black space-x-5 `}
                  href={"/Whislist"}
                >
                  <HeartIcon className="h-5" />
                  Whislist
                </Link>
              </li> */}

              <li>
                <Link
                  className={`links buttonlink text-gray-600 hover:text-black space-x-5 `}
                  href={"/Cart"}
                >
                  <ShoppingCartIcon className="h-5" />
                  Cart<span className="text-gray-700">{
                    CartCountItem ? CartCountItem[0]?.reduce((accu, curr) => {
                      return accu + curr.items
                    }, 0) : 0
                  }</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => dispatch(AccountIn())}
                  ref={AccountBtn}
                  className={`links  text-gray-600 hover:text-black  space-x-5 ${popupAccount ? "bg-blue-600 text-white" : ""
                    }`}
                >
                  <UserIcon className="h-5" />
                  Account
                </button>
              </li>
            </ul>
            <div className="w-full">
              <SignUpBox AccountBtn={AccountBtn} Logoutbox={Logoutbox} />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Headers;
