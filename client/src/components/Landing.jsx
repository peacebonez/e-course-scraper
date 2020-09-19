import React from "react";

import {
  FaUserClock,
  FaChalkboardTeacher,
  FaStamp,
  FaCloudUploadAlt,
} from "react-icons/fa";

import Promo from "./Promo";

const Landing = () => {
  return (
    <div className="landing-wr">
      <div className="landing-background"></div>
      <div className="landing-header-wr">
        <h2 id="company-title">E-Enroll</h2>
        <hr></hr>
        <h3>
          Find <span className="text-strong">STEM</span> courses online from
          respected institutions!
        </h3>
      </div>
      <h2>
        Nothing is stopping you from getting the skills and education <i>you</i>{" "}
        desire. Instead of searching various websites for the best courses,{" "}
        <span className="text-strong">our web scraping technology</span> already
        does that for you upon your search.
      </h2>
      <hr></hr>
      <div className="promo-container">
        <div>
          <Promo
            icon={<FaChalkboardTeacher className="promo-icon" />}
            heading={"Learn the latest skills"}
            paragraph={
              "like SEO analytics, graphic design, Python, and more..."
            }
            orientation={"r"}
          />
          <Promo
            icon={<FaUserClock className="promo-icon" />}
            heading={"Go at your own pace"}
            paragraph={
              "Learn at your own pace, 100% online. Choose from options including free courses and university degrees at competitive price.  Make the most of your time. "
            }
            orientation={"l"}
          />
        </div>
        <div>
          <Promo
            icon={<FaStamp className="promo-icon" />}
            heading={"Earn sought after credentials"}
            paragraph={
              "from prestigous insitutions in business, academia, computer science, and more."
            }
            orientation={"r"}
          />
          <Promo
            icon={<FaCloudUploadAlt className="promo-icon" />}
            heading={"Elevate your organization to the next level"}
            paragraph={
              "with streaming programs and courses for your employees and colleagues.  Keep driving forward!"
            }
            orientation={"l"}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
