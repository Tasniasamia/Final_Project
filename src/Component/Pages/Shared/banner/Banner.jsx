import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pik from '../../../../assets/home/01.jpg';
import pik1 from '../../../../assets/home/02.jpg'
import pik3 from '../../../../assets/home/03.png'

const Banner = () => {
    return (
        <div className='text-center'>
        <Carousel>
        <div>
            <img src={pik} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={pik1} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={pik3}/>
            <p className="legend">Legend 3</p>
        </div>
    </Carousel></div>
    );
};

export default Banner;