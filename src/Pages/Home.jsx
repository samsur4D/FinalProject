import React from 'react';
import Banner from '../Components/Banner';
import Centered from '../Components/Centered'
import HomeHw from '../Components/HomeHw';
import Popular from '../Components/Popular';
import ChefRecommend from '../Components/ChefRecommend';
import Featured from '../Components/Featured';
import Extra from '../Components/Extra';
import Test from '../Components/Test';
import Contact from '../Components/Contact';
import { Helmet } from 'react-helmet-async';
import Marquee from "react-fast-marquee";
import Who from "../Pages/Common/Who"

const Home = () => {
    return (
        <div>
          <Helmet>
        <title>Home</title>
      </Helmet>
          <Banner></Banner>


          <Centered></Centered>

     <Marquee direction='left' speed={160}><p className='text-5xl font-samu font-bold bg-red-50 p-4 )'>--"Committed to Cleanliness, Dedicated to Deliciousness."--</p></Marquee>

          <HomeHw></HomeHw>

          <Marquee direction='right' speed={160}><p className='text-5xl font-samu font-bold bg-red-50 p-4 )'>--"Your Safety, Our Priority: Every Meal, Every Time.""--</p></Marquee>

          <Popular></Popular>

          <ChefRecommend></ChefRecommend>

          <Who></Who>

          <Featured></Featured>

          <Test></Test>

          <Extra></Extra>

          <Contact></Contact>
        </div>
    );
};

export default Home;