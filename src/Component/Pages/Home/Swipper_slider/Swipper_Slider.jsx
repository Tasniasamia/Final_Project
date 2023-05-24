import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../../../assets/home/slide1.jpg';
import slider2 from '../../../../assets/home/slide2.jpg'
import slider3 from '../../../../assets/home/slide3.jpg'
import slider4 from '../../../../assets/home/slide4.jpg'

import slider5 from '../../../../assets/home/slide5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swipper_Slider.css";

// import required modules
import { Pagination } from "swiper";

export default function Swipper_Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  w-full"
      >






        <SwiperSlide><div><img src={slider1} alt="slider1" />
        <h2 className="md:text-3xl text-white -mt-12 mx-auto
        ">Salad</h2><div className="mt-12"></div></div></SwiperSlide>
 <SwiperSlide><div><img src={slider2} alt="slider2" />
        <h2 className="md:text-3xl text-white mx-auto
       -mt-12  ">Pizza</h2></div></SwiperSlide>


<SwiperSlide><div><img src={slider3} alt="slider3" />
        <h2 className="md:text-3xl text-white -mt-12 mx-auto
        ">Soup</h2></div></SwiperSlide>       
 <SwiperSlide><div><img src={slider4} alt="slider4" />
        <h2 className="md:text-3xl text-white -mt-12 mx-auto
        ">Cake</h2></div></SwiperSlide>     
        <SwiperSlide><div><img src={slider5} alt="slider5" />
        <h2 className="md:text-3xl text-white -mt-12 mx-auto
        ">Salad</h2></div></SwiperSlide>        
      </Swiper>
    </>
  );
}
