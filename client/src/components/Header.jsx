import React, { useState } from "react";

import { connect } from "react-redux";
import { getCourses } from "../actions/courses-action";

import logo from "../assets/stem-icon.png";
import { FaSearch } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const Header = ({ getCourses, courses }) => {
  console.log("courses state:", courses);

  const [userQuery, setUserQuery] = useState("");

  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    if (!userQuery) return;
    else {
      history.push(`/search?course=${userQuery}`);
      console.log("userQuery:", userQuery);
      getCourses(userQuery);
      setUserQuery("");
    }
  };

  const textChange = (e) => {
    setUserQuery(e.target.value);
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
            value={userQuery}
            onChange={(e) => textChange(e)}
          />
          <button type="submit" id="search-btn">
            <FaSearch />
          </button>
        </div>
      </form>
      <Link to="/">
        <img id="logo" src={logo} alt="STEM search icon" />
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.courses.courses,
});

export default connect(mapStateToProps, { getCourses })(Header);
