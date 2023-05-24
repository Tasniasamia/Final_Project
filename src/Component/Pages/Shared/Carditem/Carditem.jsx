import React from 'react';
import './carditem.css';
const Carditem = (props) => {
    const propsdata=props.indexdata;
    return (
        <div className="card w-96 bg-base-100">
  <figure><img src={propsdata.image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold text-center">{propsdata.name}</h2>
    <p>{propsdata.recipe}</p>
    <div className="card-actions justify-center">
    <button className="btn btn-active text-warning">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default Carditem;