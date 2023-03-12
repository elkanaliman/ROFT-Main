import React from 'react'
import { footerBottomItem } from '../../constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-[#000066] py-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='w-full grid grid-cols-7 gap-3 place-content-center text-gray-50'>
          {
            footerBottomItem.map ((item)=>(
              <div className='group' key={item._id}>
                <h3 className='w-24 font-semibold text-[12px] hover:bg-[#85C1E9] text-[#FDFEFE] 
                leading-3 mb-[2px] '>{item.title}</h3>
                <p className='w-24 tracking-tight text-[12px] text-[#D0D3D4] group-hover:underline 
                leading-3 cursor-pointer'>{item.des}</p>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default FooterBottom