import React from "react";
import "./Header.scss";



const Header = () => {
    return (
        <header>
        <h2>The Portfolio of Kyla Oyamot</h2>
        <nav>
          <a className="header-a" href="#">Porfolio</a>
          <a className="header-a" href="#">About Me</a>
          <a className="header-a" href="#">Contact</a>
        </nav>
      </header>
    )
}

export default Header;