import Link from 'next/link'
import React from 'react'

const PleaseLoginPage = () => {
  return (
    <div style={{height:'calc(100vh - 60px)'}} className='w-full bg-gray-50  flex items-center justify-center'>
        <div className=" flex flex-col w-full items-center text-center space-y-7">
            <h3 className='text-[25px] font-semibold text-gray-700'>Login </h3>
            <Link href={`/Login`} className='text-white bg-red-600 font-semibold rounded-sm px-[40px] py-2  '>Login</Link>
        </div>
    </div>
  )
}

export default PleaseLoginPage