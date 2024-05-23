import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide2.jpg";
import img3 from "../assets/home/slide3.jpg";
import img4 from "../assets/home/slide4.jpg";
import img5 from "../assets/home/slide5.jpg";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "./SectionTitle";

export default function App() {
  return (
    <section data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="mb-36 mt-24">
        <SectionTitle subHeading={"---from 11:00 am to 10:00 pm"} heading={'Order Online'}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} alt="" />
          <h3 className="text-5xl text-gray-200 text-center font-samu bg-opacity-60 -mt-20">SALAD</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="text-5xl text-gray-200 text-center font-samu bg-opacity-60 -mt-20">PIZZA</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="text-5xl text-gray-200 text-center font-samu bg-opacity-60  -mt-20">SOUP</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="text-5xl text-gray-200 text-center font-samu bg-opacity-60 -mt-20">DESERT</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="text-5xl text-gray-200 text-center font-samu bg-opacity-60 -mt-20 mr-5">VEGETABLE</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
