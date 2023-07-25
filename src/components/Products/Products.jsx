import React from "react";
import "./Products.css";
import milling from '../../assets/milling.png'

const Products = () => {
  const data = [
    {
      image: milling,

      title: "Milling Machine",
    },
    {
      image: milling,

      title: "Milling Machine",
    },
    {
      image: milling,

      title: "Milling Machine",
    },
    {
      image: milling,

      title: "Milling Machine",
    },
    {
      image: milling,

      title: "Milling Machine",
    },
    {
      image: milling,

      title: "Milling Machine",
    },
    {
      image: milling,

      title: "Milling Machine",
    },
    {
      image: milling,

      title: "Milling Machine",
    },
  ];
  return (
    <div className="products-wrapper">
      <div>
        <h1>OUR PRODUCTS</h1>
      </div>
      <div className="products-content-wrapper">
        {data.map(({ image, title }, i) => (
          <div className="products-individual-wrapper">
            <img src={image} alt="" />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div>
        <a href="">
          <p>Browse Products</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M1.28631 14.9574C1.09544 14.7666 1 14.5406 1 14.2794C1 14.0183 1.09544 13.7926 1.28631 13.6022L6.87899 8.00954L1.26723 2.39778C1.08908 2.21963 1 1.99694 1 1.72971C1 1.46248 1.09544 1.23343 1.28631 1.04256C1.47719 0.851679 1.70319 0.756241 1.96431 0.756241C2.22543 0.756241 2.45117 0.851679 2.64154 1.04256L9.05498 7.47509C9.13133 7.55144 9.18554 7.63415 9.21761 7.72323C9.24967 7.8123 9.26545 7.90774 9.26495 8.00954C9.26495 8.11134 9.24891 8.20678 9.21684 8.29586C9.18478 8.38493 9.13082 8.46764 9.05498 8.54399L2.62245 14.9765C2.4443 15.1547 2.22466 15.2438 1.96354 15.2438C1.70242 15.2438 1.47668 15.1483 1.28631 14.9574Z"
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

export default Products;
