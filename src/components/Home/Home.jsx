import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Home.css";
import orgtri from '../../assets/orangetri.png'
import brotri from "../../assets/browntri.png";

const Home = () => {
  return (
    <div className="home-wrapper" id="home">
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
          us section. Write about the company industry. This is all some random
          text. This is an about us section. Write about the company industry.
          
        </p>
        <a
          href=""
          style={{
            backgroundColor: "#f48a01",
            width: "fit-content",
            padding: "10px 15px",
            textDecoration: "none",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Become a Dealer
        </a>
      </div>
      <div className="homw-unwanted1">
        <img src={orgtri} alt="" />
      </div>{" "}
      <div className="homw-unwanted2">
        <img src={brotri} alt="" />
      </div>
      <div className="home-social-media">
        <a href="">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            className="home-social-media-icons"
            viewBox="0 0 16 30"
            fill="none"
          >
            <path d="M10.2648 16.8636H13.9308L15.3972 10.998H10.2648V8.0652C10.2648 6.55481 10.2648 5.1324 13.1976 5.1324H15.3972V0.205296C14.9192 0.142241 13.114 0 11.2077 0C7.22642 0 4.3992 2.42983 4.3992 6.89208V10.998H0V16.8636H4.3992V29.328H10.2648V16.8636Z" />
          </svg>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            className="home-social-media-icons"
            viewBox="0 0 31 30"
            fill="none"
          >
            <path d="M28.1198 6.78193C23.7206 -0.000224194 14.7388 -2.01654 7.77335 2.19939C0.991199 6.41533 -1.20842 15.5804 3.19082 22.3626L3.55742 22.9125L2.09101 28.4115L7.59005 26.9451L8.13996 27.3117C10.5229 28.5948 13.0891 29.328 15.6553 29.328C18.4048 29.328 21.1544 28.5948 23.5373 27.1284C30.3194 22.7292 32.3357 13.7474 28.1198 6.78193ZM24.2705 20.8961C23.5373 21.996 22.6208 22.7292 21.3377 22.9125C20.6045 22.9125 19.6879 23.2791 16.0219 21.8127C12.9058 20.3462 10.3396 17.9633 8.50656 15.2138C7.40675 13.9307 6.85685 12.281 6.67354 10.6313C6.67354 9.16485 7.22345 7.88174 8.13996 6.96523C8.50656 6.59863 8.87316 6.41533 9.23977 6.41533H10.1563C10.5229 6.41533 10.8895 6.41533 11.0728 7.14853C11.4394 8.06504 12.3559 10.2647 12.3559 10.448C12.5392 10.6313 12.5392 10.9979 12.3559 11.1812C12.5392 11.5478 12.3559 11.9144 12.1726 12.0977C11.9893 12.281 11.806 12.6476 11.6227 12.8309C11.2561 13.0142 11.0728 13.3808 11.2561 13.7474C11.9893 14.8472 12.9058 15.947 13.8223 16.8635C14.9221 17.78 16.0219 18.5132 17.305 19.0631C17.6716 19.2464 18.0382 19.2464 18.2215 18.8798C18.4048 18.5132 19.3213 17.5967 19.6879 17.2301C20.0546 16.8635 20.2379 16.8635 20.6045 17.0468L23.5373 18.5132C23.9039 18.6965 24.2705 18.8798 24.4538 19.0631C24.6371 19.613 24.6371 20.3462 24.2705 20.8961Z" />
          </svg>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            className="home-social-media-icons"
            viewBox="0 0 31 30"
            fill="none"
          >
            <path d="M15.4916 9.77423C12.799 9.77423 10.6016 11.9716 10.6016 14.6642C10.6016 17.3568 12.799 19.5542 15.4916 19.5542C18.1842 19.5542 20.3816 17.3568 20.3816 14.6642C20.3816 11.9716 18.1842 9.77423 15.4916 9.77423ZM30.1579 14.6642C30.1579 12.6393 30.1763 10.6326 30.0625 8.61134C29.9488 6.26356 29.4132 4.1799 27.6964 2.46308C25.9759 0.742598 23.8959 0.210679 21.5482 0.0969581C19.5232 -0.0167627 17.5166 0.00157943 15.4953 0.00157943C13.4703 0.00157943 11.4637 -0.0167627 9.4424 0.0969581C7.09461 0.210679 5.01096 0.746267 3.29414 2.46308C1.57365 4.18357 1.04173 6.26356 0.928013 8.61134C0.814292 10.6363 0.832634 12.6429 0.832634 14.6642C0.832634 16.6855 0.814292 18.6958 0.928013 20.7171C1.04173 23.0649 1.57732 25.1485 3.29414 26.8654C5.01462 28.5858 7.09461 29.1178 9.4424 29.2315C11.4674 29.3452 13.474 29.3269 15.4953 29.3269C17.5202 29.3269 19.5269 29.3452 21.5482 29.2315C23.8959 29.1178 25.9796 28.5822 27.6964 26.8654C29.4169 25.1449 29.9488 23.0649 30.0625 20.7171C30.1799 18.6958 30.1579 16.6892 30.1579 14.6642ZM15.4916 22.1881C11.328 22.1881 7.96769 18.8279 7.96769 14.6642C7.96769 10.5006 11.328 7.14031 15.4916 7.14031C19.6553 7.14031 23.0155 10.5006 23.0155 14.6642C23.0155 18.8279 19.6553 22.1881 15.4916 22.1881ZM23.3237 8.58933C22.3515 8.58933 21.5665 7.80429 21.5665 6.83216C21.5665 5.86003 22.3515 5.07499 23.3237 5.07499C24.2958 5.07499 25.0808 5.86003 25.0808 6.83216C25.0811 7.063 25.0359 7.29162 24.9477 7.50494C24.8595 7.71826 24.73 7.91209 24.5668 8.07531C24.4036 8.23854 24.2098 8.36796 23.9965 8.45617C23.7831 8.54437 23.5545 8.58962 23.3237 8.58933Z" />
          </svg>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            className="home-social-media-icons"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path d="M26.7412 0C27.6055 0 28.4343 0.343323 29.0454 0.954442C29.6566 1.56556 29.9999 2.39442 29.9999 3.25867V26.0693C29.9999 26.9336 29.6566 27.7625 29.0454 28.3736C28.4343 28.9847 27.6055 29.328 26.7412 29.328H3.93054C3.06629 29.328 2.23744 28.9847 1.62632 28.3736C1.0152 27.7625 0.671875 26.9336 0.671875 26.0693V3.25867C0.671875 2.39442 1.0152 1.56556 1.62632 0.954442C2.23744 0.343323 3.06629 0 3.93054 0H26.7412ZM25.9266 25.2547V16.6192C25.9266 15.2105 25.3669 13.8594 24.3708 12.8633C23.3747 11.8672 22.0237 11.3076 20.6149 11.3076C19.23 11.3076 17.6169 12.1548 16.8349 13.4257V11.6172H12.289V25.2547H16.8349V17.2221C16.8349 15.9675 17.8451 14.941 19.0996 14.941C19.7046 14.941 20.2848 15.1813 20.7126 15.6091C21.1404 16.0369 21.3807 16.6171 21.3807 17.2221V25.2547H25.9266ZM6.99369 9.0591C7.71966 9.0591 8.4159 8.77071 8.92924 8.25737C9.44258 7.74403 9.73097 7.04779 9.73097 6.32182C9.73097 4.80654 8.50897 3.56824 6.99369 3.56824C6.2634 3.56824 5.56301 3.85835 5.04662 4.37474C4.53022 4.89114 4.24012 5.59152 4.24012 6.32182C4.24012 7.8371 5.47841 9.0591 6.99369 9.0591ZM9.25847 25.2547V11.6172H4.74521V25.2547H9.25847Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
