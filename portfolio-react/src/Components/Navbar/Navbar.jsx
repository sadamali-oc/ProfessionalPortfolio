import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

function Navbar() {
  const [menu, setmenu] = useState("home");
  const menuRef=useRef();

const closeMenu=()=>{
  menuRef.current.style.right='0'
}


const openMenu=()=>{
  menuRef.current.style.right='-350'
}

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} alt=""  className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#Home">
            <p onClick={() => setmenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setmenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            {" "}
            <p onClick={() => setmenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p onClick={() => setmenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setmenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "cotact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>

      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;