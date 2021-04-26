import React from "react";
import TestemonialCarousel from "./TestemonialCarousel";

const Testemonials = () => {
  return (
    <div id="reference" className="testemonials">
      <h1>Nasi klijenti</h1>
      <div className="container">
        <div className="testemonials-content">
          <TestemonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
