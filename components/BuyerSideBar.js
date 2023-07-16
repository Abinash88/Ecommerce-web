import { Catagory } from '@/ReduxStore/CatagorySlice';
import { OpenCatagory } from '@/ReduxStore/ToggleSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BuyerSideBar = () => {
    const { isCatagory } = useSelector(state => state.toggle);
    const dispatch = useDispatch();
    const { BuyerDatas, status } = useSelector(state => state.buyersProduct);



    return (
        <div style={{ height: 'calc(100vh - 55px)' }} className={`md:w-[280px] ${isCatagory ? 'left-0' : ' left-[-100%]'} w-full md:relative absolute md:left-0  p-2 border-2 bg-gray-100 transition-all transition-3s`}>
            <div className="p-5  w-full h-full px-7">
                <h4 className='text-start   py-1 text-[18px] font-bold text-blue-900'>Category</h4>
                <div onClick={() => dispatch(OpenCatagory())} className="mt-1">
                    <button onClick={(e) => dispatch(Catagory({ catagory: '', Product: BuyerDatas }))} className='text-gray-600 font-semibold text-[14px] py-2 hover:text-blue-900 text-left px-1 rounded-sm hover:bg-blue-100 w-full' >All</button>
                    <button onClick={(e) => dispatch(Catagory({ catagory: e.target.textContent, Product: BuyerDatas }))} className='text-gray-600 font-semibold text-[14px] py-2 hover:text-blue-900 text-left px-1 rounded-sm hover:bg-blue-100 w-full' >Women's Fashion</button>
                    <button onClick={(e) => dispatch(Catagory({ catagory: e.target.textContent, Product: BuyerDatas }))} className='text-gray-600 font-semibold text-[14px] py-2 hover:text-blue-900 text-left px-1 rounded-sm hover:bg-blue-100 w-full' >Men's Fashion</button>
                    <button onClick={(e) => dispatch(Catagory({ catagory: e.target.textContent, Product: BuyerDatas }))} className='text-gray-600 font-semibold text-[14px] py-2 hover:text-blue-900 text-left px-1 rounded-sm hover:bg-blue-100 w-full' >Electronic Devices</button>
                    <button onClick={(e) => dispatch(Catagory({ catagory: e.target.textContent, Product: BuyerDatas }))} className='text-gray-600 font-semibold text-[14px] py-2 hover:text-blue-900 text-left px-1 rounded-sm hover:bg-blue-100 w-full' >Groceries & Pets</button>
                    <button onClick={(e) => dispatch(Catagory({ catagory: e.target.textContent, Product: BuyerDatas }))} className='text-gray-600 font-semibold text-[14px] py-2 hover:text-blue-900 text-left px-1 rounded-sm hover:bg-blue-100 w-full' >Babies & Toys</button>
                    <button onClick={(e) => dispatch(Catagory({ catagory: e.target.textContent, Product: BuyerDatas }))} className='text-gray-600 font-semibold text-[14px] py-2 hover:text-blue-900 text-left px-1 rounded-sm hover:bg-blue-100 w-full' >Home & Lifestyle</button>
                    <button onClick={(e) => dispatch(Catagory({ catagory: e.target.textContent, Product: BuyerDatas }))} className='text-gray-600 font-semibold text-[14px] py-2 hover:text-blue-900 text-left px-1 rounded-sm hover:bg-blue-100 w-full' >Sports & Outdoor</button>
                    <button onClick={(e) => dispatch(Catagory({ catagory: e.target.textContent, Product: BuyerDatas }))} className='text-gray-600 font-semibold text-[14px] py-2 hover:text-blue-900 text-left px-1 rounded-sm hover:bg-blue-100 w-full' >Motors, Tools & DIY</button>

                </div>
                <div className="mt-3 ">
                    <h4 className='text-[18px] mb-4 font-bold text-blue-900'>Price</h4>
                    <div className="flex ">
                        <div className="flex mb-2 h-[35px] items-center">
                            <input className='w-[70px] bg-gray-200 border-gray-300 border-2  h-full  rounded-md px-2' placeholder='Max...' type="number" />
                        </div>
                        <div className="flex mb-2 h-[35px] items-center">
                            <input className='w-[70px] bg-gray-200 border-gray-300 border-2  h-full   rounded-md ml-2 px-2' placeholder='Min...' type="number" />
                        </div>
                    </div>
                    <button onClick={() => dispatch(OpenCatagory())} className='px-3 py-2 text-[15px] font-semibold rounded-lg bg-blue-700 text-white hover:bg-blue-800'>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default BuyerSideBar