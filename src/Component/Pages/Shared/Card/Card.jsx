import React, { useEffect } from 'react';
import { useState } from 'react';
import Carditem from '../Carditem/Carditem';
import Sectiontitle from '../Sectiontitle/Sectiontitle';

const Card = () => {
    const[card,setCard]=useState([]);
    const[False,setFalse]=useState(true);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{console.log(data);setCard(data)})
    },[])
    return (
        <div>
             {/* <div className='text-center py-3 border-y-4 my-10 md:w-1/4 mx-auto w-11/12'>
        <p className='text-yellow-400'>---Should Try---</p>
        <p className='text-3xl'>CHEF RECOMMENDS</p>
    </div> */}
    <Sectiontitle title="Should Try"subtitle="CHEF RECOMMENDS"></Sectiontitle>
        <div className='grid md:grid-cols-3 grid-cols-1 '>
            {
                card.slice(0,False?3:card.length).map(index=><Carditem key={index._id} indexdata={index}></Carditem>)
            }
        </div>
        {
            False && <div className='text-center'onClick={()=>setFalse(!False)}>
            <button className="btn btn-outline border-0 border-b-2 capitalize">View All Cards</button>
        
            </div>
        }
    
        </div>
    );
};

export default Card;