import React from 'react'


import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TokenIcon from '@mui/icons-material/Token';

const SideNavContent = () => {
  return (
    <div>
                                <h3 className='text-lg font-titleFont  mb-1 px-6'>
                                <NotificationsActiveIcon />
                                    Notification
                                </h3>
                                <ul>
                                    <li className='flex items-center justify-between hover:bg-[#3498DB] px-6
                                    py-2 cursor-pointer'>
                                        All <span><KeyboardArrowRightIcon /></span>
                                    </li>

                                    <li className='flex items-center justify-between hover:bg-[#3498DB] px-6
                                    py-2 cursor-pointer'>
                                        Sales <span><KeyboardArrowRightIcon /></span>
                                    </li>

                                    <li className='flex items-center justify-between hover:bg-[#3498DB] px-6
                                    py-2 cursor-pointer'>
                                        Purchases <span><KeyboardArrowRightIcon /></span>
                                    </li>

                                    <li className='flex items-center justify-between hover:bg-[#3498DB] px-6
                                    py-2 cursor-pointer'>
                                        NFTs (Coming Soon) <span><TokenIcon /></span>
                                    </li>
                                </ul>
                            </div>
  )
}

export default SideNavContent