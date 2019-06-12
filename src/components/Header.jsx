import React from "react";
import Anime from "react-anime";
import "./Header.sass";

const Header = () => {
  return (
    <header>
      <Anime delay={500} duration={1000} opacity={[0, 1]}>
        <h1>ATAKAN ERMİŞ</h1>
      </Anime>
    </header>
  );
};

export default Header;
