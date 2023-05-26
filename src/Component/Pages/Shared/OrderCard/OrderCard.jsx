import React from 'react';

const OrderCard = (props) => {
    const propsdata=props.indexdata;
    return (
        <div className="card w-96 bg-base-100">
  <figure><img src={propsdata.image} alt="Shoes" /></figure>
  <div className="card-body ">
  <div className='bg-black text-white w-[45px] absolute right-0 top-0 mx-5 mt-5'>${propsdata.price}</div>

    <h2 className="text-2xl font-bold text-center">{propsdata.name}</h2>
    <p>{propsdata.recipe}</p>
    <div className="card-actions justify-center">
    <button className="btn btn-active text-warning">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default OrderCard;