import React from "react";
import PropTypes from "prop-types";

const Course = () => {
  return (
    <a href="https://cs50.harvard.edu/college/2020/fall/">
      <div className="course-wr">
        <div className="course-img-wr">
          <img
            className="course-img"
            src="https://www.edx.org/sites/default/files/a7fb93c8-ac95-4313-a4be-8958d3ea7bd1.jpeg"
            alt="course name"
          />
        </div>
        <h2 className="course-name">Course Name</h2>
        <h4 className="instructor">Instructor</h4>
      </div>
    </a>
  );
};

Course.propTypes = {};

export default Course;
