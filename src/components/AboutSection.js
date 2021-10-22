import React from "react";
import home from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact us for any job or your ideas. We are professional and amazing
          worker
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home} alt="guy" />
      </div>
    </div>
  );
};

export default AboutSection;
