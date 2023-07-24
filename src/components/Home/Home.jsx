import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="swiperWrapper">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2019/09/register-company-online.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkY8kwKIcDtMLbhCmsYFJQ1HD87O4R3gePg&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/premium-photo/group-business-people-work-together-office_207634-6048.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2019/09/register-company-online.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkY8kwKIcDtMLbhCmsYFJQ1HD87O4R3gePg&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/premium-photo/group-business-people-work-together-office_207634-6048.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="home-content-wrapper">
        <h1>
          Manufacturing<br></br>Futuristic Machines.
        </h1>
        <p>
          This is all some random text. This is an about us section. Write about
          the company industry. This is all some random text. This is an about
          us section. Write about the company industry.
        </p>
      </div>
    </div>
  );
};

export default Home;
