import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../ComponentsMenu/Cover";
// import SectionTitle from './SectionTitle';
import menu0 from '../assets/menu/menupro.webp'
import menu1 from '../assets/menu/pizzzzaaaa.webp'
import menu2 from '../assets/menu/souppp.webp'
import menu3 from '../assets/menu/salad.webp'
import menu4 from '../assets/menu/dessert-bg.jpeg'
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "../Components/MenuCategory";



const Menu = () => {

  const [menu] = useMenu()
  const desserts = menu.filter(item => item.category === 'dessert')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const soup = menu.filter(item => item.category === 'soup')
  const offered = menu.filter(item => item.category === 'offered')



  return (
    <div>
      <Helmet>
        <title>Bistro_MENu</title>
      </Helmet>

      <Cover  image={menu0} title={"Our menu"}></Cover>
      <SectionTitle subHeading="--Don't Miss--" heading="Todays Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={desserts} title="Dessert" coverPic={menu4}></MenuCategory>
      <MenuCategory items={pizza} title="pizza" coverPic={menu1}></MenuCategory>
      <MenuCategory items={soup} title="soup" coverPic={menu2}></MenuCategory>
     
      <MenuCategory items={salad} title="salad" coverPic={menu3}></MenuCategory>
     
   
    </div>
  );
};

export default Menu;
