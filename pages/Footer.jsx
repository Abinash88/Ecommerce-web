import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    const myDate = new Date().getFullYear();
  return (
    <div className='md:h-[60vh] h-auto flex items-center  flex-col'>
        <div className="flex w-[90%] md:items-center items-start h-auto md:h-[60%] md:flex-row flex-col m-auto">
            <div className="flex-1 flex flex-col justify-start mt-8 px-7">
                <h2 className='logo'>Ecom-Web</h2>
                <p className='text-[15px] font-semibold mt-5 text-gray-500'> Whether you're looking for trendy fashion, cutting-edge gadgets, or home essentials, we have something for everyone. Explore our curated collection and enjoy a seamless shopping experience. Start your journey with us today!</p>
                <div className="flex mt-7 space-x-4 cursor-pointer ">
                    <FaFacebook className='text-[23px] text-gray-600 hover:text-gray-900'/>
                    <FaInstagram className='text-[23px] text-gray-600 hover:text-gray-900'/>
                    <FaTwitter className='text-[23px] text-gray-600 hover:text-gray-900'/>
                </div>
            </div>
            <div className="flex-1 flex-col flex items-center justify-start mt-8 px-7">
                <h2 className='text-[20px] font-bold '>Quick link</h2>
                <ul>
                    <li className='text-gray-700 font-semibold mt-2 hover:text-black'><a href="/">Products</a></li>
                    <li className='text-gray-700 font-semibold mt-2 hover:text-black'><a href="/Whislist">Whislist</a></li>
                    <li className='text-gray-700 font-semibold mt-2 hover:text-black'><a href="/Cart">Cart</a></li>
                    <li className='text-gray-700 font-semibold mt-2 hover:text-black'><a href="/">Account</a></li>
                </ul>
            </div>
            <div className="flex-1 flex flex-col items-start md:items-center justify-start mt-8 px-7">
            <h2 className='text-[20px] font-bold text-left '>Services</h2>
                <ul className='cursor-pointer text-left md:text-center'>
                    <li className='text-gray-700 font-semibold mt-2 hover:text-black'>Web Design</li>
                    <li className='text-gray-700 font-semibold mt-2 hover:text-black'>Seo Services</li>
                    <li className='text-gray-700 font-semibold mt-2 hover:text-black'>Video Editing</li>
                    <li className='text-gray-700 font-semibold mt-2 hover:text-black'>Backend Development</li>
                </ul>

            </div>
        </div>
        <div className="w-full flex items-center h-[80px] md:h-[20%]">
            <p className='text-center w-full text-[15px] text-gray-500'>@CopyRight Ecom-web {myDate} </p>
        </div>
    </div>
  )
}

export default Footer