import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { TfiCommentAlt } from "react-icons/tfi";


import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const Test = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="my-24">
      <SectionTitle
        subHeading="--What Our Clients Say--"
        heading="TESTIMONIALS"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" flex flex-col items-center justify-center lg:px-72 lg:my-24">
              <Rating className="" style={{ maxWidth: 180 }} value={review.rating} readOnly />

              <TfiCommentAlt className="text-9xl mt-10 mb-5"/>

              <p className="text-3xl mb-5 font-bold font-samu ">
                {review.name}
              </p>
              <p className="font-samu">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Test;
