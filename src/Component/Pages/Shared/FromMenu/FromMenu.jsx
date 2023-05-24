import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';

const FromMenu = () => {
    const[menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{console.log(data);
        const filterdata=data.filter(index=>index.category==="popular");
    setMenu(filterdata);
    })
    },[])
    return (
        <div>
        <div className='text-center py-3 border-y-4 my-10 md:w-1/4 mx-auto w-11/12'>
        <p className='text-yellow-400'>---Chcek it Out---</p>
        <p className='text-3xl'>From Our Menu</p>
    </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
            {
                menu.map(index=><MenuItem key={index._id} indexdata={index}></MenuItem>)
            }
            
        </div></div>
    );
};

export default FromMenu;