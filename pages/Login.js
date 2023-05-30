"use client"

import Link from "next/link"
import css from '../styles/Home.module.css'
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"


const Login = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const GetUserData = (e) => {
    setloginData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }
  const handleLoginData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        })
      })

      const data = await res.json();
      setIsLoading(false);
      if (!data.success) return toast.error(data.message);
      toast.success(data.message);
      router.push('/')
    } catch (err) {
      return toast.error(err.message,'internal error');
    }
  }



  return (
    <>
      <div className={css.loginback}>
        <form
          onSubmit={handleLoginData}
          style={{
            border: "1px solid whitesmoke",
            boxShadow: "4px 4px 10px #bce0e0",
            padding: "30px 45px",
            borderRadius: "20px",
          }}
          className="loginform flex flex-col rounded-md  items-center w-[400px] rounded-sm"
        >
          <h2 className="text-center text-[26px] font-bold text-gray-600 my-5">
            Login{" "}
          </h2>
          <div className="w-[100%] flex flex-col items-start ">
            <label className="my-2 text-[15px] text-gray-500" htmlFor="Email">
              Email Address
            </label>
            <input
              name="email"
              onChange={(e) => GetUserData(e)}
              className="px-4 py-2 w-full"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="w-[100%] flex flex-col items-start ">
            <label
              className="my-2 text-[15px] text-gray-500"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              onChange={(e) => GetUserData(e)}
              name="password"
              className="px-4 py-2 w-full"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="block m-auto py-3 px-7 bg-blue-500 mt-5 text-white rounded-md hover:bg-blue-600">
            {
              isLoading ? <span>Loading...</span> :
                <span>Submit</span>
            }
          </button>
          <br />
          <div className="text-center">
            <p>or</p>
            <Link href={"/Signup"} className="underline hover:text-gray-900 text-gray-700 ">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login