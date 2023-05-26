import React from 'react';

const CoverBanner = ({title,details,img}) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${img}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold">{title}</h1>
      <p className="mb-5 text-2xl">{details}</p>
    </div>
  </div>
</div>
    );
};

export default CoverBanner;