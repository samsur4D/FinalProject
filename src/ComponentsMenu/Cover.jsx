import React from "react";
import { Parallax } from 'react-parallax';

const Cover = ({ image, title }) => {
  return (
    <Parallax
    bgImage={image}
    bgImageAlt="the menu"
    strength={-300}
>
<div
      className="hero  h-[400px]"
     
    >
      <div className="hero-overlay bg-fixed bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-black py-10 px-8 rounded-2xl  bg-opacity-60">
          <h1 className="mb-5 text-5xl font-bold font-samu uppercase">
            {title}
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
</Parallax>
  );
};

export default Cover;
