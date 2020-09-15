import React from "react";
import PropTypes from "prop-types";
import placeholder from "../assets/img-placeholder.png";

const Course = ({ courseName, instructor, image, link }) => {
  //snips course name and instructor if too long
  if (courseName.length > 50) courseName = courseName.substr(0, 50) + "...";
  if (instructor.length > 25) instructor = instructor.substr(0, 25) + "...";

  return (
    <a href={link}>
      <div className="course-wr">
        <div className="course-img-wr">
          <img
            className="course-img"
            src={image || placeholder}
            alt="course name"
          />
        </div>
        <h2 className="course-name">{courseName}</h2>
        <h4 className="instructor">{instructor}</h4>
      </div>
    </a>
  );
};

Course.propTypes = {
  courseName: PropTypes.string,
  instructor: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default Course;
