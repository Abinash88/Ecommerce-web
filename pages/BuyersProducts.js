import { FetchBuyersProduct } from '@/ReduxStore/FetchProductsSlice';
import SingleBuyerItem from '@/components/smallPice/SingleBuyerItem';
import { ArchiveBoxXMarkIcon, ListBulletIcon, TableCellsIcon,EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import { OpenCatagory } from '@/ReduxStore/ToggleSlice';

const BuyersProducts = () => {

  const [setGrid, setSetGrid] = useState(true)
  const dispatch = useDispatch();
  const {BuyerDatas, status} = useSelector(state => state.buyersProduct)

  useEffect(() => {
    dispatch(FetchBuyersProduct())
  },[])
  

if(status==='loading'){
  return <Loading/>
} 

  return (
    <>
        <div className="w-full h-full">
          <div className="w-full h-[60px] flex justify-between px-6 items-center  shadow">
            <div className="md:hidden flex flex-col items-center">
              <EllipsisHorizontalIcon onClick={() => dispatch(OpenCatagory())}  className='h-8 relative zindex-10 shadow-md cursor-pointer text-gray-500 hover:bg-gray-200 bg-gray-100 rounded-full'/>
            </div>
              <h3 className='text-[19px] text-blue-900 font-semibold'>Products</h3>
              <div className=" items-center space-x-3 hidden md:flex">
                <h5 className='text-gray-500 font-semibold text-[15px]'>View:</h5>
                <TableCellsIcon onClick={() => setSetGrid(true)} className='h-8 cursor-pointer text-gray-400 hover:text-gray-500'/>
                <ListBulletIcon onClick={() => setSetGrid(false)} className={` h-8 cursor-pointer text-gray-400 hover:text-gray-500`}/>
              </div>
          </div>
            <div style={{height:'calc(100vh - 55px - 60px)'}} className={`w-full p-4 overflow-auto ${BuyerDatas?.length > 0 ? ` grid ${setGrid ? 'grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  ' : ' grid-rows-auto'}  gap-4` : 'h-full'}`}>
              {
                BuyerDatas?.length > 0 ? BuyerDatas?.map((item) => {
                  return(
                      <SingleBuyerItem key={item._id} item={item} setGrid={setGrid}/>
                  )

                }) : <div className='w-full h-full flex items-center flex-col justify-center text-[23px] font-semibold text-gray-500 '>
                  <span>No Products are Created</span>
                  <ArchiveBoxXMarkIcon className='h-12 mt-2 text-gray-400'/>
                </div>
              }
            </div>
        </div>   
    </>
  )
}

export default BuyersProducts;

