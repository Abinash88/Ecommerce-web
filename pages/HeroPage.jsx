import React from 'react'
import Ecomimage from '@/public/bglessEcom.png'
import Image from 'next/image'
import Link from 'next/link'

const HeroPage = () => {
  return (
    <div className='xl:h-[85vh] h-auto w-[90%] flex mx-auto mainheropage'>
        <div className="left md:w-[40%] w-[100%]  md:text-left text-center h-full flex flex-col mt-[160px] items-start">
            <h1 className='lg:text-[55px] text-[40px]  font-bold'>Discover the Perfect Products for You.</h1>
            <p className='text-[17px] font-semibold mt-5'>Welcome to our online store, where you'll find a wide range of high-quality products to meet all your needs. </p>
            <Link href={'#ProductBox'} className='lg:text-[17px] md:text-[16px] text-[15px]  font-semibold px-10 py-3 bg-blue-600 hover:bg-blue-700 block mx-auto md:inline md:mx-0 text-white mt-10 '>Buy Now </Link>
        </div>
        <div className="right md:w-[60%] w-[0]  h-[100%] hidden md:flex mt-[160px] items-start justify-center">
            <Image width={'100%'} height={'100%'}  src={Ecomimage} alt="images" className='' />
        </div>
    </div>
  )
}

export default HeroPage