import React from 'react';
import './carditem.css';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
const Carditem = (props) => {
    const propsdata=props.indexdata;
    const handledata=()=>{
  return enqueueSnackbar('That was easy!');
    }
    return (
        <div className="card w-96 bg-base-100">
  <figure><img src={propsdata.image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold text-center">{propsdata.name}</h2>
    <p>{propsdata.recipe}</p>
    <div className="card-actions justify-center">
    <button className="btn btn-active text-warning"onClick={handledata}>Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default Carditem;