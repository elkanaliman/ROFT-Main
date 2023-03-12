import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/amazonSlice';

const Products = () => {

  const dispatch = useDispatch()
  const data = useLoaderData();
  const productsData =  data.data;
 


  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4'>
      {
        productsData.map((item)=>(
          <div key={item.id} className='bg-[#D6EAF8] h-auto border-[1px] border-gray-300 py-6 z-30 hover:border-transparent
          shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative  '>

<span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>{item.category}
            </span>


            <div className='w-full h-auto flex items-center justify-center relative group'> 
            <img className='w-52 h-64 object-contain' src={item.image} alt='ProductImg' />

            <ul className='w-full h-36 bg-[#0c3244] absolute bottom-[-170px] 
             flex flex-col items-end justify-center gap-2
            font-titleFont px-2 border-r group-hover:bottom-0 duration-700'>

              <li className='productli'>Compare 
                <span>
                 <ApiIcon />
                 </span>
              </li>

              <li className='productli'>Add to cart 
                <span>
                 <ShoppingCartIcon />
                 </span>
              </li>

              <li className='productli'>View Details 
                <span>
                 <ArrowCircleRightIcon />
                 </span>
              </li>

              <li className='productli'>+ Wishist
                <span>
                 <FavoriteIcon />
                 </span>
              </li>



            </ul>

            

            </div>

            <div className='px-4 z-10 bg-white'>
              <div className='flex items-center justify-between'>
                <h2 className='font-titleFont tracking-wide text-lg text-[#1565C0]
                   font-medium'>
                  {item.title.substring(0-20)}
                </h2>
                <p>${item.price}</p>
              </div>

              <div>
                <p className='text-sm'>{item.description.substring(0,100)}...</p>

                <div className='text-[#130e2e]'>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  <StarBorderIcon />
                  
                </div>
              </div>

              <button onClick={()=>dispatch(addToCart({

                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                category: item.category,
                image:item.image,
                quantity: 1,

              }))} className='w-full font-sans font-medium text-base bg-gradient-to-t
              from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-blue-600 
              border-blue-700 hover:border-blue-300 active-bg-gradient-to-bl
              active:from-yellow active:to-blue-200 duration-200 py-1.7 rounded-md mt-3'>Add To Cart</button>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Products