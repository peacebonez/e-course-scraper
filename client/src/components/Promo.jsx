import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/stem-icon.png";

const Promo = ({ icon, heading, paragraph, orientation }) => {
  return (
    <div className={`promo-wr hover-tilt-${orientation}`}>
      <div className="promo-img-wr">{icon}</div>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

Promo.propTypes = {
  icon: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  orientation: PropTypes.string,
};

export default Promo;
