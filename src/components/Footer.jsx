import React from "react";
import "./Footer.sass";
import Anime from "react-anime";

const Footer = () => {
  return (
    <Anime delay={500} opacity={[0, 1]} bottom={[25, 0]}>
      <footer>2019 - Atakan Ermiş</footer>
    </Anime>
  );
};

export default Footer;
