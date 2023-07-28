import React from 'react'
import "./Contact.css";
import image from "../../assets/contact-image.png";


const Contact = () => {
  return (
    <div className="ourjourney-wrapper" style={{marginTop:0}}>
      <div className="ourjourney-image-wrapper" style={{ background: "#fff" }}>
        <img src={image} alt="" />
      </div>
      <div className="ourjourney-content" style={{ background: "#fff",color:"black" }}>
        <h1>The right machine on time.</h1>
        <p className='contact-content'>
          This is all some random text. This is an about us section. Write about
          the company industry. This is all some random text.
        </p>
        <a href="">
          <p>Get In Touch</p>
        </a>
      </div>
    </div>
  );
}

export default Contact
