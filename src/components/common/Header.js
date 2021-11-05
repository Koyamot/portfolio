import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
