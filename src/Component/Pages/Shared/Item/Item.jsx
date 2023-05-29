import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import Cover from '../Cover/Cover';
import { Link } from 'react-router-dom';

// import 'animate.css/animate.min.css';
// import 'animate.css/animate.compat.css'
const Item = ({Item,title,img}) => {
   
    return (
        <div>

{title && <Cover title={title}details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"img={img}  ></Cover>}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-20'>
            {
                Item.map(index=><MenuItem key={index._id} indexdata={index}></MenuItem>)
            }
            
        </div>
        <div className='text-center'>
           <Link to={`/Order/${title}`} > <button className="btn btn-outline border-0 border-b-2 capitalize">Order now</button></Link> </div>
        </div>
    );
};

export default Item;