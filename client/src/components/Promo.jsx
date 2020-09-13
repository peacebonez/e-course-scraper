import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/stem-icon.png";

const Promo = () => {
  return (
    <div className="promo-wr">
      <img className="promo-img" src={logo} alt="logo" />
      <h2>Learn the latest skills</h2>
      <p>
        Pomp his feere nor his sighed oft start vaunted none have. Ways heralds
        with these paphian disappointed for, perchance known.
      </p>
    </div>
  );
};

Promo.propTypes = {};

export default Promo;
