import React from 'react';
import CoverBanner from '../../Shared/CoverBanner/CoverBanner';
import pik from '../../../../assets/home/banner.jpg';
import pik2 from '../../../../assets/home/chef-service.jpg';
import pik3 from '../../../../assets/menu/pizza-bg.jpg';
import pik4 from '../../../../assets/menu/salad-bg.jpg';
import pik5 from '../../../../assets/menu/soup-bg.jpg';
import Sectiontitle from '../../Shared/Sectiontitle/Sectiontitle';
import useMenu from '../../../../../Hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet';
import Item from '../../Shared/Item/Item';
const Menu = () => {
    const [menu]=useMenu();

    const offer=menu.filter(index=>index.category==="offered");
    const dessert=menu.filter(index=>index.category==="dessert");
    const pizza=menu.filter(index=>index.category==="pizza");
    const salad=menu.filter(index=>index.category==="salad");
    const soup=menu.filter(index=>index.category==="soup");
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Bisto Boss | Menu</title>
            </Helmet>
            <CoverBanner title="Our Menu"details="WOULD YOU LIKE TO TRY A DISH?"img={pik}></CoverBanner>
        
        <Sectiontitle title="Don't miss"subtitle="TODAY'S OFFER"></Sectiontitle>
        <Item Item={offer}></Item>
        {/* <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mb-20'>
            {
                offer.map(index=><MenuItem key={index._id} indexdata={index}></MenuItem>)
            }
            
        </div> */}
        <Item title="Dessert"img={pik2} Item={dessert}></Item>
        <Item title="Pizza"img={pik3} Item={pizza}></Item>
        <Item title="Salad"img={pik4} Item={salad}></Item>
        <Item title="Soup"img={pik5} Item={soup}></Item>

        {/* <Cover title="DESSERTS"details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"img={pik2} ></Cover>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-20'>
            {
                dessert.map(index=><MenuItem key={index._id} indexdata={index}></MenuItem>)
            }
            
        </div> */}
        {/* <Cover title="PIZZA"details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"img={pik3} ></Cover>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-20'>
            {
                pizza.map(index=><MenuItem key={index._id} indexdata={index}></MenuItem>)
            }
            
        </div> */}
        {/* <Cover title="Salad"details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"img={pik4} ></Cover>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-20'>
            {
                salad.map(index=><MenuItem key={index._id} indexdata={index}></MenuItem>)
            }
            
        </div> */}
        {/* <Cover title="Soup"details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"img={pik5} ></Cover>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-20'>
            {
                soup.map(index=><MenuItem key={index._id} indexdata={index}></MenuItem>)
            }
            
        </div> */}
        </div>
    );
};

export default Menu;