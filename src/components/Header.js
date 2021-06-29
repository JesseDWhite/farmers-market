import React from "react";
import marketImage from "./../img/marketPic.png";

function Header() {
  return (
    <React.Fragment>
      <h1>Avery's Organics</h1>
      <img src={marketImage} alt="a bunch of fresh yummy veggies in baskets." />
    </React.Fragment>
  );
}

export default Header;