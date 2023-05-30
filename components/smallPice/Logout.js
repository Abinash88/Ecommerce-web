import { logout } from "@/ReduxStore/ToggleSlice";
import {  SetLogout } from "@/ReduxStore/UserSlice";
import axios from "axios"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user)

    const LogoutUser = async () => {
          dispatch(SetLogout());
          router.push('/Login')
    } 
  

  return (
    <>
        <div className="">
            <button className="px-5 py-2 w-full rounded-md bg-gray-300 text-black hover:bg-gray-500  hover:text-white font-semibold " onClick={LogoutUser}>Logout</button>
        </div>
    </>
  )
}

export default Logout