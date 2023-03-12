import React from 'react'; 
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { logo } from "../../assets/index";
import { allItems } from "../../constants/index";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignOut } from '../../redux/amazonSlice';



const Header = () => {

    const auth = getAuth();
    const dispatch = useDispatch();

    const [showAll, setShowAll] = useState (false);
    const products = useSelector((state) => state.amazon.products);
    const userInfo = useSelector((state) => state.amazon.userInfo);

    const handleLogout = () =>{
        signOut (auth)
        .then (()=>{
            console.log('signout successful');
            dispatch(userSignOut())
            

        })
        .catch ((error)=>{
            console.log(error);

        })
        
        
        
    }
    
    
  return (

    /*sticky*/
    <div className='w-full sticky top-0 z-50' >
        <div className='w-full bg-black  text-white px-4 py-1 flex items-center gap-4'>
            {/**=======Image Starts Here====== */}
        <Link to='/'>
          <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
             <img className='w-10 mt-2' src= {logo} alt='logo' />
          </div>
        </Link>

        {/**=======Image ends here====== */}
        {/**=======Delivery====== */}

        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
            <LocationOnIcon />

            

        </div>

        {/**=======Ends here====== */}
        {/**=======search starts here====== */}
        <div className='h-10 rounded-md flex flex-grow relative'>
            <span onClick={() =>{
                setShowAll(!showAll)
            }} 
            
            className='w-14 h-full bg-[#283593 ] hover:bg-black-300 border-2 cursor-pointer
            duration-300 text-sm text-amazon_blue font-titleFont flex items-center
            justify-center rounded-tl-md rounded-bl-md'>
                ALL <span>

                    <ArrowDropDownIcon /> 
                    
                    </span>
                    {
                        showAll && (
                            <div>
                                <ul className='absolute w-60 h-80 top-1o left-0 overflow-y-scroll
                                overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2
                                flex-col gap-1 z-50'>
                                    
                                    {
                                        allItems.map((item) =>(
                                            <li className='text-sm tracking-wide font-titleFont 
                                            border-b-[1px] border-b-transparent hover:bg-[#886f5b] cursor-pointer duration-200' 
                                            key={item._id}>{item.title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
            </span>
            <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
             type= 'text '/>
             <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                <SearchIcon />

             </span>
        </div>

        {/**=======search ends here====== */}
        {/**======signin starts here======= */}

        <Link to='/signin'>
        <div className='flex flex-col items-start justify-center headerHover'>
           {
            userInfo ? (
                <p className='text-sm font-light text-white'>{userInfo.userName}</p>
            ):( <p className='text-xs text-lightText font-bodyFont'> Sign In</p>)
           }


           
            <p className='text-sm font-semibold -mt-1 text-whiteText' > Accounts<span><ArrowDropDownIcon /></span></p>
        </div>
        </Link>

        {/**=======signin ends here====== */}
        {/**======orders starts here======= */}
        <div className='flex flex-col items-start justify-center headerHover' >
            <p className='text-xs text-lightText font-bodyFont'>Returns</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'> & Orders</p>
        </div>

        {/**=======orders ends here====== */}
        {/**======cart starts here======= */}
        <Link to ='/cart'>
          <div className='flex flex-col items-start justify-center headerHover'>
              <ShoppingBagIcon />
               <p className='text-sm font-semibold mt-1 text-whiteText'>
                
                  Items Cart
                   <span className='absolute text-xs top-7 font-bodyFont p-1 h-4 bg-[#8E24AA] 
                     rounded-full flex justify-center items-center'>
                     {products.length > 0 ?products.length:0}
                   </span>

             
             
                </p>

           </div>
        </Link>

        {
            userInfo && (
                <div onClick={handleLogout} className='flex flex-col justify-center items-center headHover relative cursor-pointer'>
                    <LogoutIcon />
                    <p className='hidden mdl: inline-flex text-xs font-semibold text-white '> Logout</p>

                </div>
            )
        }
        </div>
        <HeaderBottom />

    </div>
  )
}

export default Header