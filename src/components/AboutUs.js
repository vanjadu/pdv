import React from "react";
import Team from "../images/team.jpg";
// React font-awesome ikonice
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div id="onama" className="aboutus-area">
      <div className="container about-container">
        <div className="row">
          <div className="col-xs-12">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <div className="aboutus-content ">
                <h1>
                  PDV <span>Inzenjering</span>
                </h1>
                <h4>Ime industrije</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore reiciendis aut eum itaque temporibus amet voluptates
                  adipisci vero quisquam repudiandae doloremque in corporis, qui
                  vitae sed similique nobis minus. Delectus placeat recusandae
                  ad aspernatur alias blanditiis asperiores quisquam numquam
                  unde quas veritatis error corporis laboriosam esse tempora, a
                  optio culpa.
                </p>

                <div className="counter ">
                  <div className="single-counter text-center">
                    <h2 className="counter">1500</h2>
                    <p>Lorem, ipsum.</p>
                  </div>

                  <div className="single-counter text-center">
                    <h2 className="counter">10</h2>
                    <p>Lorem, ipsum.</p>
                  </div>

                  <div className="single-counter text-center">
                    <h2 className="counter">5</h2>
                    <p>Lorem, ipsum.</p>
                  </div>

                  <div className="single-counter text-center">
                    <h2 className="counter">6</h2>
                    <p>Lorem, ipsum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
