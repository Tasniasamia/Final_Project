import React, { useState } from 'react';
import useMenu from '../../../../Hooks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderCard from '../Shared/OrderCard/OrderCard';
import CoverBanner from '../Shared/CoverBanner/CoverBanner';
import pik from '../../../assets/home/banner.jpg';
import { useParams } from 'react-router-dom';
import Item2 from '../Shared/Item2/Item2';
const Order = () => {
    const [menu]=useMenu();
    const drinks=menu.filter(index=>index.category==="drinks");
    const dessert=menu.filter(index=>index.category==="dessert");
    const pizza=menu.filter(index=>index.category==="pizza");
    const salad=menu.filter(index=>index.category==="salad");
    const soup=menu.filter(index=>index.category==="soup");
   const categories=['Salad','Pizza','Soup','Dessert','Drink'];
   const {category}=useParams();
const indexdata=categories.indexOf(category);
        const [tabIndex, setTabIndex] = useState(indexdata);

        return (
            <div>
    <CoverBanner title="Our Menu"details="WOULD YOU LIKE TO TRY A DISH?"img={pik}></CoverBanner> 
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList style={{textAlign:"center"}}>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drink</Tab>
            </TabList>
            <TabPanel>
           
<Item2 itemall={salad}></Item2>

            </TabPanel>
            <TabPanel>
          
<Item2 itemall={pizza}></Item2>


            </TabPanel>
            <TabPanel>
          
<Item2 itemall={soup}></Item2>

            </TabPanel>
            <TabPanel>
         

<Item2 itemall={dessert}></Item2>
            </TabPanel>
            <TabPanel>
           
<Item2 itemall={drinks}></Item2>

            </TabPanel>
          </Tabs></div>
        );
      };
  

export default Order;