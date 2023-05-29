import React from 'react';
import OrderCard from '../OrderCard/OrderCard';

const Item2 = ({itemall}) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
        {
itemall.map(index=><OrderCard key={index._id} indexdata={index}></OrderCard>)
}</div>
    );
};

export default Item2;