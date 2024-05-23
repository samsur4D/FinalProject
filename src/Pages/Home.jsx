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

const Home = () => {
    return (
        <div>
          <Helmet>
        <title>Home</title>
      </Helmet>
          <Banner></Banner>

          <Centered></Centered>

          <HomeHw></HomeHw>

          <Popular></Popular>

          <ChefRecommend></ChefRecommend>

          <Featured></Featured>

          <Test></Test>

          <Extra></Extra>

          <Contact></Contact>
        </div>
    );
};

export default Home;