import React from 'react'
import { middleList } from '../../constants'
import FooterMiddleList from './FooterMiddleList'
import { logo, keFlag } from '../../assets/index';

const FooterMiddle = () => {
  return (
    <div className='w-full bg-[#110a4e] text-white '>
      {/* ============Top here */}
      <div className='w-full border-b-[1px] border-[#B3E5FC ] py-10'>
        <div className='max-w-5xl mx-auto text-white '>
          <div className='w-full grid grid-cols-4 place-items-center items-start'>
           
           {
            middleList.map((item) =>(
              <FooterMiddleList  
              key={item._id}
              title = {item.title}
              listItem = {item.listItem}
              />
            ))
           }
          
          

          </div>
        </div>
      </div>
      {/* ============Top ends */}
      {/* ============Bottom starts */}
      <div className='w-full flex gap-6 items-center justify-center py-6'>
        <img className='w-20 pt-3' src={keFlag} alt='logo'  />
        <p>KENYAN MARKET</p>
      </div>
      

      <div className='flex gap-6 '>
        <p className='flex gap-1 items-center justify-center border border-gray-800
        hover:border-[#3949AB] cursor-pointer duration-200 px-2 py-1'>ENGLISH</p>
      </div>

      

      



      {/* ============Bottom ends here */}
    </div>
  )
}

export default FooterMiddle