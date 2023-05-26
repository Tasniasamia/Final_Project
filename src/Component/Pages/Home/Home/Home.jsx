import React from 'react';
import Banner from '../../Shared/banner/banner';
import Swipper_Slider from '../Swipper_slider/Swipper_Slider';
import FromMenu from '../../Shared/FromMenu/FromMenu';
import Bisto2 from '../../Shared/Bisto2/Bisto2';
import Card from '../../Shared/Card/Card';
import BannerMenu from '../../Shared/BannerMenu/BannerMenu';
import HomeSlider2 from '../../Shared/HomeSlider2/HomeSlider2';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
      
        <div className=''>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Bisto Boss | Home</title>
            </Helmet>
    <Banner></Banner>
  <div className='my-40'>
    <div className='flex justify-center py-3  my-10  mx-auto w-full'>
      <div>
        <p className='text-yellow-400 text-center py-2'>---From 11.00am to 10.00am---</p>
        <p className='text-3xl border-y-4  text-center py-4'>ORDER ONLINE</p></div>
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


  <div>
    <div>
      <HomeSlider2></HomeSlider2>
    </div>
  </div>
        </div>
    );
};

export default Home;