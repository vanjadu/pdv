import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import person from "../images/person.webp";

const TestemonialCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      showStatus={false}
    >
      <>
        <img src={person} alt="person" />
        <div className="myCarousel">
          <h3>Ime Prezime 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit iure eius ipsa, neque corrupti quidem.
          </p>
        </div>
      </>
      <>
        <img src={person} alt="person" />
        <div className="myCarousel">
          <h3>Ime Prezime 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit iure eius ipsa, neque corrupti quidem.
          </p>
        </div>
      </>
      <>
        <img src={person} alt="person" />
        <div className="myCarousel">
          <h3>Ime Prezime 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit iure eius ipsa, neque corrupti quidem.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestemonialCarousel;
