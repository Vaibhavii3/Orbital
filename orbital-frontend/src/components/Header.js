// Header.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../style/Header.css";  // For custom styling
import Hero from "./Hero";

const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
    // e.preventDefault();
    // Handle search logic here, e.g., navigate to search results page
    // console.log("Searching for: ", searchQuery);
//   };

  return (
    <div>

    

    {/* <header className="header">
      <div className="logo">
        <span className="logo-glow">Cosmic</span>Connect
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-cta">
        <button className="cta-button">Join Now</button>
      </div>
    </header> */}
      <Hero />
      </div>
  );
};

export default Header;
