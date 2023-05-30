import Layout from '@/components/Layout'
import Link from 'next/link'
import * as React from 'react'

const Products = () => {
  return (
    <>
    <Layout>
        <div className="p-4">
            <div className="">
                <Link href={'/Add/AddProduct'} className='px-4 py-2 bg-blue-600 text-white rounded-md font-bold cursor-pointer hover:bg-blue-700'>Add Products</Link>
            </div>
            <div className="productsList mt-5 ">
                product list
            </div>
        </div>   
    </Layout>
    </>
  )
}

export default Products