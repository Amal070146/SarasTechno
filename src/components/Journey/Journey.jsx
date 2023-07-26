import React from "react";
import "./Journey.css";
import image from "../../assets/imgourjourney.png";

const Journey = () => {
  return (
    <div className="ourjourney-wrapper">
      <div className="ourjourney-image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="ourjourney-content">
        <h1>OUR JOURNEY</h1>
        <p>
          This is all some random text. This is an about us section. Write about
          the company industry. This is all some random text. This is an about
          us section. Write about the company industry. This is all some random
          text. This is an about us section. Write about the company industry.
          Write about the company industry. This is all some random text. This
          is an about us section. Write about the company industry. Write about
          the company industry. This is all some random text. This is an about
          us section. Write about the company industry.{" "}
        </p>
        <a href="">
          <p>Read More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M1.28631 14.9575C1.09544 14.7667 1 14.5407 1 14.2796C1 14.0184 1.09544 13.7927 1.28631 13.6023L6.87899 8.00965L1.26723 2.39788C1.08908 2.21973 1 1.99704 1 1.72982C1 1.46259 1.09544 1.23354 1.28631 1.04266C1.47719 0.851786 1.70319 0.756348 1.96431 0.756348C2.22543 0.756348 2.45117 0.851786 2.64154 1.04266L9.05498 7.47519C9.13133 7.55154 9.18554 7.63426 9.21761 7.72333C9.24967 7.81241 9.26545 7.90785 9.26494 8.00965C9.26494 8.11145 9.24891 8.20689 9.21684 8.29596C9.18478 8.38504 9.13082 8.46775 9.05498 8.5441L2.62245 14.9766C2.4443 15.1548 2.22466 15.2439 1.96354 15.2439C1.70242 15.2439 1.47668 15.1484 1.28631 14.9575Z"
              fill="white"
              stroke="#F48A01"
              stroke-width="0.4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Journey;
