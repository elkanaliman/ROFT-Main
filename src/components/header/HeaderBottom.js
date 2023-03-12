import React from 'react'
import { useState, useRef, useEffect } from "react";
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import SellIcon from '@mui/icons-material/Sell';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import SideNavContent from './SideNavContent';
import { useSelector } from 'react-redux';


const HeaderBottom = () => {
    const userInfo = useSelector((state) => state.amazon.userInfo);
    const ref = useRef();
    const [sidebar, setSidebar] = useState (false)
    useEffect (()=>{
        document.body.addEventListener('click', (e) =>{
            if(e.target.contains (ref.current)){
                setSidebar(false);
            }
        }) 

    },[ref, sidebar])

  return (
    <div className='w-full h-[30px] px-4 text-white bg-[#070b2c] flex items-center'>
        {/**=======ListItems start here====== */}
        <ul className='flex items-center gap-2 text0-sm tracking-wide'>
            <li onClick={()=>setSidebar(true)} className='headerHover flex items-center gap-1'><MenuOpenSharpIcon />All</li>
            <li className='headerHover'><CategorySharpIcon />InGame Items</li>
            <li className='headerHover'><VerticalAlignTopIcon/>Global Top Ups</li>
            <li className='headerHover'><LocalConvenienceStoreIcon />Local Top Ups</li>
            <li className='headerHover'><QuestionMarkIcon />How to sell and buy</li>
            <li className='headerHover'><SellIcon />SELL</li>
            <li className='headerHover'><InfoIcon />About Roft</li>
        </ul>
        {/**======ListItems end here======= */}
        {/**=======SideNav starts here====== */}
        {
            sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-[#3498DB] bg-opacity-50'>
                    <div className='w-full h-full relative'>
                        <div ref={ref} className='w-[350px] h-full bg-white border border-blue-900'>
                            <div className='w-full bg-[#0f0d72] text-white py-2 px-6 flex items-center
                            gap-4'>
                                <AccountCircleIcon />
                                {
                                    userInfo ? ( <h3>{userInfo.userName} </h3>) : (<h3>Hello, Please Sign In </h3>)
                                }


                            </div>
                            <SideNavContent />

                            
                        </div>
                        <span onClick={()=> setSidebar(false)} className='cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-[#FAFAFA]
                        flex items-center justify-center border bg-[#34495E] hover:bg-[#5DADE2]
                        hover:text-white duration-300'><CloseFullscreenIcon /></span>
                    </div>

                </div>
            
            )
        }
        {/**======SideNav ends here======= */}
        
    </div>
  )
}

export default HeaderBottom