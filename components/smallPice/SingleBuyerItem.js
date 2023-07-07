import { StarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React from "react";

const SingleBuyerItem = ({ item, setGrid }) => {

  const router = useRouter();
 
  return (
    <div
      className={`hover:shadow-lg cursor-pointer ${!setGrid ? "flex flex-start " : "h-[350px]"
        }  border  rounded-sm `}
    >
      <div
        className={`  ${!setGrid ? "w-[200px] h-[90%] my-auto ml-3" : "w-full h-[50%]"
          }`}
      >
        <img
          className={`w-full h-full ${!setGrid ? "" : ""} rounded-sm`}
          src={item?.image?.url ? item?.image?.url : "../public/user-image.png"}
          alt=""
        />
      </div>
      
      <div className={`p-2 ${!setGrid ? "w-[70%] p-6" : ""}`}>
        <div className="">
          <div className="flex justify-between">
            <div className="">
              <h4 onClick={() => router.push(`/singleProductBox/${item._id}`)} 
                className={`${!setGrid ? "mb-2" : ""
                  } text-[14px] hover:underline mr-3 mb-3 capitalize text-blue-500 font-semibold`}
              >
                {item?.name?.substring(0, 20)}...
              </h4>

              <div className="flex items-center space-x-4 my-2">
                <h5 className="text-[20px] font-light text-red-500 ">
                  ${item?.price}
                </h5>
                <h5 className="line-through text-gray-500 font-[13px]">
                  {item.decreasePrice}
                </h5>
              </div>


              <div
                className={`flex ${!setGrid ? "" : "hidden"
                  } items-center text-gray-400 tracking-wide text-[15px] justify-between`}
              >
                {item?.description}
              </div>
            </div>
            <div className="text-[12px] text-gray-500 font-semibold capitalize">
              <h4>{item?.country}</h4>
            </div>
          </div>
          <div className="flex justify-between">
            <button  className="text-[13px] hover:bg-gray-100 border  font-semibold py-1 rounded-sm px-2 mt-2">
              Add To Cart
            </button>
            <span className="flex items-center">
              <StarIcon className="h-2.5 text-red-500" />
              <StarIcon className="h-2.5 text-red-500" />
              <StarIcon className="h-2.5 text-red-500" />
              <StarIcon className="h-2.5 text-red-500" />
              <StarIcon className="h-2.5 text-red-500" />
              <span className="text-[12px]  text-gray-500 ">(4)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBuyerItem;
