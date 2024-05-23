import React from "react";
import SectionTitle from "./SectionTitle";
import imge from "../assets/home/featured.jpg";
import  '../Components/Feauter.css'
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="fea-item bg-fixed mt-60 mb-36">

     <div>
     <SectionTitle
        subHeading="--Check it Out--"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="flex justify-center items-center gap-5  pb-20 pt-12 ">
        <div>
          <img className="w-[500px]" src={imge} alt="" />
        </div>
        <div className="mt-24 px-10 py-5 rounded-2xl  bg-black opacity-30">
          <h4 className="text-white ">March 20 , 2023</h4>
          <h4 className="text-white ">Where Can I Get Some ?</h4>
          <p className="text-white ">
            Intrinsicly e-enable 2.0 value whereas top-line intellectual <br />{" "}
            capital. Monotonectally iterate.
          </p>
          <Link href="#_" class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
<span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
<span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
<span class="relative z-20 flex items-center text-sm">
<svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
Button Text
</span>
</Link>
        </div>
      </div>
     </div>


    </div>
  );
};

export default Featured;
