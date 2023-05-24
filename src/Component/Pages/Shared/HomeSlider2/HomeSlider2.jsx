import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import pik from '../../../../assets/Group.png'

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function HomeSlider2() {
    const[sliderdata,setSliderdata]=useState([]);
    useEffect(()=>{
fetch('reviews.json')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    setSliderdata(data);
})
    },[])
  return (
    <>
     <div className='text-center py-3 border-y-4 my-10 md:w-1/4 mx-auto w-11/12'>
        <p className='text-yellow-400'>---Order By---</p>
        <p className='text-3xl text-dark'>From Our Menu</p>
    </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            sliderdata.map(index=>  <SwiperSlide key={index._id}>


                <div className="flex flex-col items-center  mx-28 my-10 space-y-7">
                    <div> <Rating
      style={{ maxWidth: 180 }}
      value={index.rating}
      readOnly
    /></div>
    <div><img src={pik} alt="group" /></div>
                    <div>{index.details}</div>
                    <div style={{color:"#CD9003"}}className="text-2xl font-bold">{index.name}</div>
                </div>
            </SwiperSlide>)
        }
      
        
      </Swiper>
    </>
  );
}
