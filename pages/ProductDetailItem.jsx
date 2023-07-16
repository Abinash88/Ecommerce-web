import { Decrease, Increase, TurnToZero } from '@/ReduxStore/AddProductSlice';
import { FetchWhislist } from '@/ReduxStore/AddToWhislist';
import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon, HeartIcon as Heart } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router';
import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetailPage = ({ item }) => {
  const dispatch = useDispatch();
  const { counts } = useSelector(state => state.counts)
  const { user } = useSelector(state => state.user)
  const { whislist } = useSelector(state => state.whislist)

  console.log(whislist)
 const SaveToWhislist = (user, product) => {
  if(!user) return toast.error('Please Login first!')
  dispatch(FetchWhislist({user, product}));
}

  // adding data to cart 
  const AddDataToCart = async (id, userId) => {
    if (!user.success) return toast.error('Login First')
    try {
      const res = await fetch('/api/SetCartData', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          counts,
          id,
          userId
        })
      })

      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      toast.success(data.message);
      dispatch(TurnToZero())
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className='w-[94%] mx-auto sm:pb-0 pb-6 md:h-[80vh] h-auto relative mt-4 bg-gray-100 md:flex-row flex-col flex'>
      <div className="sm:w-[30%] sm:h-[80%] w-full">
        <img className='w-full h-full' src={item?.image?.url} alt="product image" />
      </div>
      <div className="w-[70%] ml-5">
        <div className=" mb-3">
          <h2 className='text-blue-800 sm:text-[25px] text-[18px] my-2'>{item?.name}</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center my-2">
              <StarIcon className='h-3 text-red-500' />
              <StarIcon className='h-3 text-red-500' />
              <StarIcon className='h-3 text-red-500' />
              <StarIcon className='h-3 text-red-500' />
              <StarIcon className='h-3 text-red-500' />
              <p className='ml-2 text-gray-500 text-[14px] font-semibold'>(5)Ratings</p>
            </div>

            <div onClick={() => SaveToWhislist(user?.user?._id, item?._id)} className="md:mr-10 sm:mr-0 mt-5">
              { whislist?.whislist?.acknowledged ?
              <button><HeartIcon className='h-7 ' /></button>
              :
              <button><Heart className='h-7 text-red-600' /></button>
              }
            </div>
          </div>
          <h5 className='text-red-600 text-[22px] '>Rs. {item?.price}</h5>
          <h5 className='text-gray-600 text-[17px] linethrough'>Rs. {item?.decreasePrice}</h5>
        </div>


        <div className="">
          <div className="flex items-center space-x-3">
            <h3 className='text-gray-800 font-semibold'>Quantity</h3>
            <button onClick={() => dispatch(Decrease())} className='px-4 py-2 bg-gray-200 mx-1 hover:bg-gray-300'>-</button>
            <span className='px-4 py-2 bg-gray-200  '>{counts}</span>
            <button onClick={() => dispatch(Increase())} className='px-4 py-2 bg-gray-200 mx-1 hover:bg-gray-300'>+</button>
          </div>
          <div className="my-4 md:space-x-3 space-y-4 flex md:flex-row flex-col justify-center md:block ">
            <button className='text-[16px] font-semibold w-[200px] py-2  bg-red-500 hover:bg-red-600 text-white '>Buy Now</button>
            <button onClick={() => {
              AddDataToCart(item?._id, user?.user?._id)
            }} className='text-[16px] font-semibold w-[200px] py-2  bg-slate-500 hover:bg-slate-600 text-white '>Add To Cart</button>
          </div>
        </div>
        <div className="">
          <h1 className='text-[20px]  text-gray-600 font-bold block bg-slate-200 p-2 my-5'>Product Description</h1>
          <p className='text-[15px] font-semibold text-gray-600'>{item?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage