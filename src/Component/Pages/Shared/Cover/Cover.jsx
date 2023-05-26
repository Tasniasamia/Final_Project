import React from 'react';

const Cover = ({title,details,img}) => {
    return (
        <div className="hero min-h-screen my-10" style={{ backgroundImage: `url("${img}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5 text-xs">{details}</p>
    </div>
  </div>
</div>
    );
};

export default Cover;