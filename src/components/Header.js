import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="naslovna" className="header-wrapper">
      <div className="main-info">
        <h1>PDV Inzenjering</h1>
        <Typed
          className="typed-text"
          strings={["Termoizolaterski radovi", "Bravarski i zavarivacki radovi", "Vatrostalne konstrukcije", "Skelarski radovi", "Ciscenje industrijskih objekata"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Kontaktirajte nas</a>
      </div>
    </div>
  );
};

export default Header;
