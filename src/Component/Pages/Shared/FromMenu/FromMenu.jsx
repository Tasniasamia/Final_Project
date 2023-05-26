import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import Sectiontitle from '../Sectiontitle/Sectiontitle';
import useMenu from '../../../../../Hooks/useMenu';

const FromMenu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(index=>index.category==="popular");
    return (
        <div>
        {/* <div className='text-center py-3 border-y-4 my-10 md:w-1/4 mx-auto w-11/12'>
        <p className='text-yellow-400'>---Chcek it Out---</p>
        <p className='text-3xl'>From Our Menu</p>
    </div> */}
    <Sectiontitle title="Chcek it Out" subtitle="From Our Menu"></Sectiontitle>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
            {
                popular.map(index=><MenuItem key={index._id} indexdata={index}></MenuItem>)
            }
            
        </div></div>
    );
};

export default FromMenu;