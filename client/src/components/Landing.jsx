import React from "react";
import PropTypes from "prop-types";

import Promo from "./Promo";

const Landing = () => {
  return (
    <div className="landing-wr">
      <h1>Find STEM courses online from the most respected resources!</h1>
      <Promo />
      <Promo />
      <Promo />
      <Promo />
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
