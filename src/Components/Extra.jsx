import React from "react";
import "../Components/Extra.css";

const Extra = () => {
  return (
    <div
    
    className="extra-section bg-fixed">
      <div className="flex flex-col justify-between gap-72 px-32 py-56">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        className="flex bg-slate-200  py-12 bg-opacity-40 rounded-xl">
          <img className="h-96 ml-8" src="https://i.ibb.co/mJ5FTKV/monika-grabkowska-y6-A9bh-ILk-M-unsplash.webp" alt="" />
          <div  className="mt-32 ml-10">
            <h1 className="text-3xl font-samu font-bold">Premium Food Quality</h1>
            <h1>Make Sure Customer Happiness</h1>
            <p>Phosfluorescently negotiate impactful e-commerce vis-a-vis orthogonal core competencies. Appropriately drive.</p>
          </div>
          
        </div>
        {/* -------------------------------- */}
        <div 
             data-aos="fade-left"
             data-aos-anchor="#example-anchor"
             data-aos-offset="500"
             data-aos-duration="500"
        className="flex bg-slate-200  py-12 bg-opacity-40 rounded-xl">
          <img className="h-96 ml-8" src="https://i.ibb.co/dWFzqrh/monika-grabkowska-P1aohbi-T-EY-unsplash.webp" alt="" />
          <div  className="mt-32 ml-10">
            <h1 className="text-3xl font-samu font-bold">Premium Food Quality</h1>
            <h1>Make Sure Customer Happiness</h1>
            <p>Phosfluorescently negotiate impactful e-commerce vis-a-vis orthogonal core competencies. Appropriately drive.</p>
          </div>
          
        </div>
        {/* ------------------------------- */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        className="flex bg-slate-200  py-12 bg-opacity-40 rounded-xl">
          <img className="h-96 ml-8" src="https://i.ibb.co/5xpH4Tn/alex-munsell-au-Ib-TAc-SH6-E-unsplash.webp" alt="" />
          <div  className="mt-32 ml-10">
            <h1 className="text-3xl font-samu font-bold">Premium Food Quality</h1>
            <h1>Make Sure Customer Happiness</h1>
            <p>Phosfluorescently negotiate impactful e-commerce vis-a-vis orthogonal core competencies. Appropriately drive.</p>
          </div>
          
        </div>
        <div
          data-aos="zoom-in-down"
        className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">"Life is uncertain. Eat dessert first." - Ernestine Ulmer</h1>
      <p className="mb-5">Recognize the foundational role of good nutrition in enabling all other activities. Fuel your body and mind properly to tackle life's challenges.</p>
   
    </div>
  </div>
</div>
        <div></div>
      </div>
    </div>
  );
};

export default Extra;
