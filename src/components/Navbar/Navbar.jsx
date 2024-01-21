import React, { useState } from "react";
import "./Navbar.modules.css";
import Logo from "../../assets/elisoft__logo.png"
import { NavLink } from "react-router-dom";
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="Navbar">
        <span className="nav-logo">
            <img src={Logo} alt="Elisoft__Logo"/>
        </span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/list-properties">List Properties</NavLink>
          <NavLink to="/sign-in">Sign In</NavLink>
          
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
  )
}
