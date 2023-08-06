import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
// import WhisListSingleItem from './WhisListSingleItem';

const WhislistBody = ({whislistdata}) => {
    const {user} = useSelector(state => state.user)
  
    const dispatch = useDispatch()
  const router = useRouter();



  return (
    <div className={`flex md:flex-row flex-col-reverse space-y-5 items-center md:items-start  relative justify-start w-[100%] md:w-[90%] md:space-x-4 h-[78vh]  my-10 m-auto`}>
    {whislistdata?.product?.length > 0 ? (
        <>
            <div className="md:w-[70%] w-[95%] h-full  overflow-auto relative m-auto p-3 flex flex-col gap-[20px]">
                {whislistdata?.product?.map((item) => {
                    // return (
                    //     <WhisListSingleItem
                    //         key={item._id}
                    //         item={item}
                    //     />
                    // );
                })}
            </div>
        </>
    ) : (
        <div className="w-full mt-10 h-full flex flex-col justify-center items-center">
            <h3 className="text-[20px] text-gray-500 font-semibold">
                No Item Found in Whislist!
            </h3>
            <button
                className="font-semibold text-white px-6 py-3 bg-red-600   mt-5 hover:bg-red-700"
                onClick={() => router.push("/")}
            >
                Go Back
            </button>
        </div>
    )}
</div>
  )
}

export default WhislistBody