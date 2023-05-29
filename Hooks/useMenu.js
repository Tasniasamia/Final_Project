import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu,setMenu]=useState([]);
    const [load,setLoad]=useState(true);

    useEffect(()=>{
        setLoad(true);
        fetch(`http://localhost:6769/menu`)
        .then(res=>res.json())
        .then(data=>{setMenu(data);setLoad(false)})
    },[])
    return [menu,load]
};

export default useMenu;