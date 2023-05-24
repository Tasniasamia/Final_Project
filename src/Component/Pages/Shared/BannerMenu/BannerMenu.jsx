import React from 'react';
import img from '../../../../assets/home/featured.jpg';
import './BannerMenu.css';
const BannerMenu = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img}` }}>
  <div className="hero-overlay"></div>
  <div className="hero-content  text-neutral-content">
  <div className='text-center py-3 border-y-4 my-10 md:w-1/4 mx-auto w-11/12'>
        <p className='text-yellow-400'>---Order By---</p>
        <p className='text-3xl text-white'>From Our Menu</p>
    </div>
    <div className='flex justify-center items-center'>
    <div>
        <img src={img} className='w-[400px] me-5' alt="feature" />
    </div>
    <div className="max-w-md">
      <h1 className="mb-1 text-xl">March 20, 2023</h1>
      <h1 className="mb-1 text-2xl ">WHERE CAN I GET SOME?</h1>

      <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
      <button className="btn btn-outline border-0 border-b-2 capitalize text-white">Read More</button>

    </div></div>
  </div>
</div>
    );
};

export default BannerMenu;