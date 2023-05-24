import React from 'react';

const MenuItem = (props) => {
    const propsdata=props.indexdata;
    return (
      


            <div className='flex space-x-4'>
<div className=''><img src={propsdata.image} className=' w-[100px]'style={{borderRadius:"0px 200px 200px 200px"}} alt="image" /></div>
<div><div className='uppercase'>{propsdata.name}--------</div><div>{propsdata.recipe}</div></div>
<div style={{color:"#BB8506"}}>${propsdata.price}</div>
            </div>
       
       
       
     
    );
};

export default MenuItem;