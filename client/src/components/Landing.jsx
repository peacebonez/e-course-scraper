import React from "react";
import PropTypes from "prop-types";
import { FaUserClock } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

import Promo from "./Promo";

const Landing = () => {
  return (
    <div className="landing-wr">
      <div className="landing-background"></div>
      <h1>Find STEM courses online from respected institutions!</h1>
      <h2>
        Nothing is stopping you from getting the skills and education <i>you</i>{" "}
        desire.
      </h2>
      <Promo
        icon={<FaChalkboardTeacher className="promo-icon" />}
        heading={"Learn the latest skills"}
        paragraph={"like business analytics, graphic design, Python, and more"}
        orientation={"r"}
      />
      <Promo
        icon={<FaUserClock className="promo-icon" />}
        heading={"Go at your own pace"}
        paragraph={
          "Choose from many options including free courses and university degrees at a breakthrough price. Learn at your own pace, 100% online."
        }
        orientation={"l"}
      />
      <Promo
        icon={<FaUserClock className="promo-icon" />}
        heading={"Earn the right credentials"}
        paragraph={
          "from a leading university in business, computer science, and more"
        }
        orientation={"r"}
      />
      <Promo
        icon={<FaUserClock className="promo-icon" />}
        heading={"Take your organization to the next level"}
        paragraph={
          "with on-demand training and development programs for your employees and colleagues.  Keep driving forward"
        }
        orientation={"l"}
      />
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
