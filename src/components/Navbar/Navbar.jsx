import React, { useEffect, useState } from "react";
import "./Navbar.css";
import left from "../../assets/nav-left.png";
import right from "../../assets/nav-right.png";
import logo from "../../assets/Logo.png";
import { useReactPath } from "./path.hook";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  function openMenu() {
    console.log("true");
    setopenmenu(!openmenu);
  }
  function closeMenu() {
    setopenmenu(false);
  }
  const [navbg, setNavBg] = useState(false);

  const path = useReactPath();
  const navContent = ["home", "about", "products", "vlog", "contact"];
  useEffect(() => {}, [path]);
  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <div className="navbar-wrapper">
      <div className="desk-left-nav">
        <img src={left} alt="" />
        <div className="desk-left-nav-content">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="desk-left-nav-content-links">
            {navContent.map((content, i) => (
              <a
                style={{ textDecoration: "none" }}
                href={`#${content}`}
                key={i.toString() + content}
              >
                <p
                  style={{
                    color: window.location.href.includes(`#${content}`)
                      ? "#F48A01"
                      : "#4A142E",
                    textTransform: "capitalize",
                    padding: "5px 20px",
                    fontWeight: 700,
                  }}
                >
                  {content}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="desk-nav-right">
        <img src={right} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
