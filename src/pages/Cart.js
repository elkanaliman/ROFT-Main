import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/amazonSlice';
import { emptyCard } from '../assets';
import { Link } from 'react-router-dom';


const Cart = () => {
  const dispatch = useDispatch()

const products = useSelector((state) => state.amazon.products)
const [totalPrice, setTotalPrice ] = useState ('')

useEffect(()=>{
  let Total = 0;
  products.map((item) =>{
    Total += item.price * item.quantity;
    return setTotalPrice(Total.toFixed(2))
  } )
},[products])


  return (

    <div className='w-full bg-white p-1'>

        {
          products.length>0 ? (
            <div className='container mx-auto left-0 h-auto grid grid-cols-2 gap-8 '>

          <div className='w-full h-full bg-white px-4 col-span-4'></div>

            

            {/* =======products start here====== */}

            <div>
                {
                products.map((item)=>(
                    <div key={item.id} className='w-full border-b-[1px] border-b-[#C5CAE9] p-4 flex
                    items-center gap-6 '>
                        <div className='w-42'>
                          <img className=' h-70 object-contain' src={item.image} alt='' />
                        </div>

                        <div className='w-3/5'>
                            <h2 className='font-semibold text-lg'>{item.title}</h2>
                            <p className='pr-10 text-sm'>{item.description.substring(0,70)}</p>
                            <p className='text-base'>Unit Price <span className='font-semibold'>${item.price}</span> </p>

                            <div className='bg-[#283593] flex justify-center items-center gap-1 w-24 py-1
                            text-center drop-shadow-lg rounded-md '>
                              <p>
                                Qty:
                              </p>
                              <p onClick={() =>dispatch(decrementQuantity(item.id))} 
                              className='cursor-pointer bg-[#E3F2FD] px-1 rounded-md hover:bg-[#B2DFDB] duration-300 '>-</p>
                              <p>{item.quantity}</p>
                              <p onClick={() =>dispatch(incrementQuantity(item.id))}
                              className='cursor-pointer bg-[#E3F2FD] px-1 rounded-md hover:bg-[#B2DFDB] duration-300 '>+</p>
                            </div>

                            <button onClick={()=>dispatch(deleteItem(item.id))} className='bg-[#5C6BC0] w-36 py-1 rounded-lg text-white mt-2 hover:bg-[#f13548]
                            active:bg-[#F44336] duration-300'>
                              Remove Item
                            </button>


                        </div>

                        <div className='w-3/5'>
                          <p className='text-lg font-titleFont font-semibold'>
                            ${item.price * item.quantity }
                          </p>
                        </div>
                        
                    </div>
                ))
                }
            </div>

            <div className='w-full py-2' >
              <button onClick={()=>dispatch(resetCart())} className='px-10 py-2 bg-[#1E88E5]  hover:bg-[#B3E5FC] active:bg-[#80DEEA]
              text-[#000033] rounded-lg font-titleFont font-semibold text-lg tracking-wide'>
                Clear List
              </button>
            </div>



          <div className='w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4'>

            <div>
              <p className='flex gap-2 items-start text-sm'> <span><CheckCircleIcon className='
              text-[#3b39b4] rounded-full' /></span>
               Qualifies for FREE Shipping.
               </p>
            </div>
            <div>
             <p className='font-semibold px-10 py-1 flex items-center justify-between'>Total : 
               <span className='text-lg font-bold'>
                ${totalPrice}
               </span>
             
             </p>
            </div>
            <button className='w-full font-titleFont font-medium text-base bg-[#5C6BC0] to-blue-200 border
            hover:from-[#42A5F5] hover:to-[#00BCD4] border-yellow-200 hover:border-[#BBDEFB]
            active:bg-[#B2EBF2] active:from-[#4DD0E1] active:to-[#336066] duration-200 py-1.5 rounded-md mt-3 '>
              Proceed to Checkout
            </button>
          </div>


        </div>
          ): <div>
            <div>
              <img className='w-80 rounded-lg p-4 mx-auto'
              src={emptyCard} alt='emptyCard' />
            </div>
            <div className='w-96 p-4 bg-[#0099FF] flex flex-col items-center rounded-md
            shadow-lg'>
              <h1 className=' font-titleFont text-xl font-bold text-[#b5e3f8]'>Don't You Think Your Cart feels lonely?</h1>
              <p className='text-sm text-[#E1F5FE]'>Give it a purpose</p>
              <Link to='/'>
              <button className='mt-6 bg-[#c3effc] rounded-md cursor-pointer
              hover:bg-[#beb9ee] text-[#0a0d1f]'>
                Continue Shopping
              </button>
              </Link>
            </div>
          </div>
        }

    </div>
  )
}

export default Cart