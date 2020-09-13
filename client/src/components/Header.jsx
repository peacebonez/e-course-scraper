import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/stem-icon.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  return (
    <div className="header-wr">
      <form
        className="header-form"
        name="submit"
        onSubmit={(e) => submitForm(e)}
      >
        <div className="form-wr">
          <input
            id="search-bar"
            type="text"
            placeholder="Start a course today..."
          />
          <button type="submit" id="search-btn">
            <FaSearch />
          </button>
        </div>
      </form>

      <img id="logo" src={logo} alt="STEM search icon" />
    </div>
  );
};

Header.propTypes = {};

export default Header;
