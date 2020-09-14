import React from "react";
import PropTypes from "prop-types";
import Course from "./Course";

const CourseContainer = () => {
  return (
    <div className="landing-wr">
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
};

CourseContainer.propTypes = {};

export default CourseContainer;
