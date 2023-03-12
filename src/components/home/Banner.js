import React, { useState } from 'react'
import Slider from "react-slick";


import { 
    bannerimgRoblox,
    bannerimgEpic7,
    bannerimgFreefire,
    bannerimgPES,
    bannerImgTwo,
    bannerImgThree
 } from "../../assets/index"

const Banner = () => {
    const [dotActive, setDocActive ] = useState (0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange : (prev, next) =>{
            setDocActive(next);
        },
        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "45%",
                transform: "translate (-50%,-50%)",
                width: "210",
              }}
            >
              <ul style={{ 
                width: "100%",
                display : "flex",
                alignItems: "center",
                justifyContent: "space-between",
                
                }}> 
                {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display : "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor:"pointer",
                border: "1px solid #fa847",
                
              }}
            >
              {i + 1}
            </div>
          )
      };

      return (
        <div className='w-full'>
            <div className='w-full h-full relative'>
              <Slider {...settings}>
               <div>

                <img  src= { bannerImgTwo}  alt='bannerimgEpic7'  />
            
               </div>
          

               <div>
                 <img src= { bannerImgThree}  alt='bannerimgEpic7'  />

                </div>

                <div>
                 <img className='w-200px h-800px' src= { bannerimgFreefire}  alt='bannerimgEpic7'  />
                </div>

                <div>
                 <img src= { bannerimgPES}  alt='bannerimgEpic7'  />
                </div>

                <div>

                 <img src= { bannerimgEpic7}  alt='bannerimgEpic7'  />

                </div>

                <div>

                 <img src= { bannerimgRoblox}  alt='bannerimgEpic7'  />

                </div>


        
              </Slider>
            </div>
        </div>
        )
}

export default Banner