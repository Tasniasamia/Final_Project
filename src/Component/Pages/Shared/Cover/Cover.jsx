import React from 'react';
import { Parallax } from 'react-parallax';
const Cover = ({title,details,img}) => {
    return (
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
  >
        <div className="hero min-h-screen my-10">
  {/* <div className="hero-overlay bg-opacity-60"></div> */}
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5 text-xs">{details}</p>
    </div>
  </div>
</div></Parallax>
    );
};

export default Cover;