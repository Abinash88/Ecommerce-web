import { ClockIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='md:min-h-[60vh] h-auto   aboutpage flex-col items-center flex mb-0 w-full'>
            <h2 className='text-[45px] font-bold  mb-9'>Best Serivces</h2>
            <div className="w-[90%] md:flex grid cursor-pointer mx-auto">
                <div className="flex-1 hover:bg-gray-100 px-10  flex flex-col items-center justify-start">
                        <RocketLaunchIcon className='h-[70px] mb-5 text-blue-500'/>
                    <h2 className='text-[25px] text-gray-900 font-semibold'>Lightning-Fast Delivery</h2>
                    <p className='text-[16px] text-gray-600 font-semibold my-4 text-center '>Get Your E-Commerce Products in No Time! 🚀
                        Experience the convenience of swift and efficient delivery services for all your online shopping needs. </p>
                </div>
                <div className="flex-1 hover:bg-gray-100 px-10  flex flex-col items-center justify-start">
                        <ClockIcon className='h-[70px] mb-5 text-blue-500'/>
                    <h2 className='text-[25px] text-gray-900 font-semibold'>24/7 Services</h2>
                    <p className='text-[16px] text-gray-600 font-semibold my-4 text-center '>We Provide 24/7 support service, where assistance is just a click or call away, no matter the time of day! </p>
                </div>
                <div className="flex-1 hover:bg-gray-100 px-10  flex flex-col items-center justify-start">
                        <RocketLaunchIcon className='h-[70px] mb-5 text-blue-500'/>
                    <h2 className='text-[25px] text-gray-900 font-semibold'>Branded Products</h2>
                    <p className='text-[16px] text-gray-600 font-semibold my-4 text-center '>Get Your E-Commerce Products in No Time! 🚀
                        Experience the convenience of swift and efficient delivery services for all your online shopping needs. </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage