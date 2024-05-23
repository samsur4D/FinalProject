import { useState } from "react";
import Cover from "../ComponentsMenu/Cover";
import coveri from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../Hooks/useMenu";
import FoodCard from "../Components/FoodCard";
import { Helmet } from "react-helmet-async";
import OrderTab from "../Components/OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {
    const categories = ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks'] 
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
const [tabIndex,setTabindex] = useState(initialIndex)
// console.log();

const [menu] = useMenu();

console.log(category);


const salad = menu.filter(item => item.category === 'salad')
const pizza = menu.filter(item => item.category === 'pizza')
const soup = menu.filter(item => item.category === 'soup')
const desserts = menu.filter(item => item.category === 'dessert')
const drinks = menu.filter(item => item.category === 'drinks')

  return (

    
    <div>

<Helmet>
    <title>Bistro_ORDER_SITE</title>
  </Helmet>
      <Cover image={coveri} title="Order Food"></Cover>

    <div className=" mt-20 mb-5">
    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
        <TabList className="flex items-center justify-center mb-10 ">
          <Tab >Salad</Tab>
          <Tab >Pizza</Tab>
          <Tab >Soup</Tab>
          <Tab >Dessert</Tab>
          <Tab >Drinks</Tab>
        </TabList>

        <TabPanel>
           <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
    </div>
  );
};

export default Order;
