import React from 'react'

const Cart = () => {

  const GetCartItem = async() => {
    try{
      const res = await fetch('http://localhost:3000/api/GetCartData',{
        method: 'GET',
        headers:{
          "Content-Type": "application/json",
        }
      })
      const data = await res.json();
      if(!data.success) return console.log(data.message);

    }catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div>

    </div>
  )
}

export default Cart