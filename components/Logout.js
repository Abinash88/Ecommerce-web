import { LogoutHandler } from "@/ReduxStore/LogoutSlice";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    if (!user.success) {
      router.push('/')
    }
  }, [user]);

  return (
    <>
      <div className="">
        {user.success ?
          <button className="px-5 py-2 w-full rounded-md border border-gray-400 text-black hover:bg-gray-300 font-semibold " onClick={() => dispatch(LogoutHandler())}>Logout</button>
          : 
          <button className="px-5 py-2 w-full rounded-md border border-gray-300 text-black hover:bg-gray-300 font-semibold " onClick={() => router.push('/Login')}>LogIn</button>
        }
      </div>
    </>
  )
}

export default Logout