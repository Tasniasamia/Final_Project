import React from 'react';
import pik from '../../../../assets/home/chef-service.jpg';

const Bisto2 = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${pik})` }}>
        <div className=" "></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-xl bg-base-100 text-black p-10">
            <h1 className="mb-5 text-5xl font-bold uppercase">Bistro Boss</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
      </div>
    );
};

export default Bisto2;