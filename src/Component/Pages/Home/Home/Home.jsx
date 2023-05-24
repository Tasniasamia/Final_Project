import React from 'react';
import Banner from '../../Shared/banner/banner';
import Swipper_Slider from '../Swipper_slider/Swipper_Slider';
import FromMenu from '../../Shared/FromMenu/FromMenu';
import Bisto2 from '../../Shared/Bisto2/Bisto2';
import Card from '../../Shared/Card/Card';
import BannerMenu from '../../Shared/BannerMenu/BannerMenu';

const Home = () => {
    return (
        <div className=''>
    <Banner></Banner>
  <div className='my-40'>
    <div className='text-center py-3 border-y-4 my-10 md:w-1/4 mx-auto w-11/12'>
        <p className='text-yellow-400'>---From 11.00am to 10.00am---</p>
        <p className='text-3xl'>ORDER ONLINE</p>
    </div>
    <Swipper_Slider></Swipper_Slider>
  </div>
  <div className='my-40'>
    
  <div>
    {/* <Bisboss></Bisboss> */}
    <Bisto2></Bisto2>
  </div></div>


  <div className='my-40'>
    
  <div>
   <FromMenu></FromMenu>
  </div></div>
  <div className='my-40'>
    <div>
      <Card></Card>
    </div>

  </div>

  <div className='my-40'>
    <div>
      <BannerMenu></BannerMenu>
    </div>

  </div>
        </div>
    );
};

export default Home;