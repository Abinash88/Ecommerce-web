import Link from "next/link"
import css from '../styles/Home.module.css'
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();

  const [signinData, setSigninData] = useState({
    name:'',
    email:'',
    password:'',
  })

  const GetUserData = (e) => {
    setSigninData((data) => ({...data, [e.target.name]:e.target.value}));
  }
  const handleSignupData =async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('api/auth/signup', {
        method: 'POST',
        headers:{
          "content-type": "application/json",
        },
        body:JSON.stringify({
          name:signinData.name,
          email:signinData.email,
          password:signinData.password,
        })
      })

      const data =await res.json();
      if(!data.success)  return toast.error(data.message);
      toast.success(data.message);
      router.push('/Login')
    }catch(err) {
      return toast.error(err.message);
    }
  }


  return (
    <>
        <div className={css.loginback}>
        <form
          onSubmit={handleSignupData}
          style={{
            border: "1px solid whitesmoke",
            boxShadow: "4px 4px 10px #bce0e0",
            padding: "30px 45px",
            borderRadius: "10px",
          }}
          className="loginform flex  flex-col rounded-md  items-center w-[400px] rounded-sm"
        >
          <h2 className="text-center text-[26px] font-bold text-gray-600 my-5">
            Signup{" "}
          </h2>
          <div   className="w-full flex flex-col items-start ">
            <label className="my-2 text-[15px] text-gray-500" htmlFor="name">
              Name
            </label>
            <input
              onChange={(e) => GetUserData(e)}
              name="name"
              className="bg-gray-100 rounded-md w-[100%] px-4 py-2 w-full"
              type="text"
              placeholder="User name"
              required
            />
          </div>
          <div   className="w-full flex flex-col items-start ">
            <label className="my-2 text-[15px] text-gray-500" htmlFor="Email">
              Email Address
            </label>
            <input
            name="email"
             onChange={(e) => GetUserData(e)}
              className="bg-gray-100 rounded-md w-[100%] px-4 py-2 w-full"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div  className="w-full flex flex-col items-start ">
            <label
               className="my-2 text-[15px] text-gray-500"
              htmlFor="Password"
            >
              Password
            </label>
            <input
             name="password"
             onChange={(e) => GetUserData(e)}
              className="bg-gray-100 rounded-md w-[100%] px-4 py-2 w-full"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="block m-auto py-3 px-5 bg-blue-600 mt-5 text-white rounded-md hover:bg-blue-700">
            Submit
          </button>
          <br />
          <div className="text-center">
            <p>or</p>
            <Link
              href={"/Login"}
              className="underline hover:text-gray-900 text-gray-700 "
            >
              Login
            </Link>
          </div>
        </form>
      </div> 
    </>
  )
}

export default Signup