import Link from "next/link";
import * as React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Togglein } from "@/ReduxStore/ToggleSlice";
import { useRouter } from "next/router";

const SideBar = () => {
  const { isToggle } = useSelector((state) => state.toggle);
  const router = useRouter();
  const pathname = router.pathname;


  return (
    <>
      <div
        style={{ height: "calc(100vh - 54px)" }}
        className={`relative ${pathname === '/'? 'hidden': ''} bg-gray-100 overflow-auto transition-left duration-300 overflow-hidden ${
          isToggle ? "w-[300px] left-[0] p-3" : "w-[0px] left-[-100%] "
        }  shadow`}
      >
        <div  className="w-full h-full bg-white border rounded-md p-3">
          <div style={{backgroundColor:'#e1fbff'}}   className="pl-2  border-b  rounded-sm border-gray-300  py-2">
            <h3 className="font-bold text-gray-600  text-[18px] text-gray-600">Manage Shop</h3>
          </div>

          <div className="flex items-center mt-3 ">
            <ul className="w-full">
              <li className={`block cursor-pointer rounded-sm w-full font-semibold text-[15px] hover:bg-gray-100 ${pathname === '/' ? 'bg-gray-100' : ''}`}> 
                <Link className=" block py-2 px-2"  href={"/"}>Admin</Link>
              </li>
              <li className={`block cursor-pointer rounded-sm w-full font-semibold text-[15px] hover:bg-gray-100 ${pathname === '/Products' ? 'bg-gray-100' : ''}`}>
                <Link className=" block py-2 px-2" href={"/Products"}>Products</Link>
              </li>
              <li className={`block cursor-pointer rounded-sm w-full font-semibold text-[15px] hover:bg-gray-100 ${pathname === '/Orders' ? 'bg-gray-100' : ''}`}>
                <Link className=" block py-2 px-2" href={"/Orders"}>Orders</Link>
              </li>
              <li className={`block cursor-pointer rounded-sm w-full font-semibold text-[15px] hover:bg-gray-100 ${pathname === '/Settings' ? 'bg-gray-100' : ''}`}>
                <Link className=" block py-2 px-2" href={"/Settings"}>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
