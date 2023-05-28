import Link from 'next/link'

const BuyerSellerPick = ({inter}) => {
  return (
    <>
             <main className={`${inter.className} flex min-h-screen justify-center items-center`}>
        <div className="flex h-[50%] border flex-col items-center justify-start p-20 rounded-sm">
          <div className="">
            <Link href={"/"}>
              <h3 className="Logo">Ecommerce-Web</h3>
            </Link>
          </div>
          <h5 className="mt-[70px] font-">Sign up one of these!</h5>
          <div className="flex mt-[40px] space-x-10">
            <div className="">
              <Link href={"/Login"}>
                {" "}
                <button className="px-10 py-4 rounded-md bg-blue-600 text-white font-bold tracking-wide hover:bg-blue-700">
                  Buyers
                </button>{" "}
              </Link>
            </div>
            <div className="">
              <button className="px-10 py-4 rounded-md bg-blue-600 text-white font-bold tracking-wide hover:bg-blue-700">
                Sellers
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default BuyerSellerPick