import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loading from "react-loading";

import Course from "./Course";

const CourseContainer = ({ courses, loading }) => {
  console.log("loading:", loading);
  let id = 0;
  console.log("courses from reducer:", courses);
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    const texts = [
      "Fetching courses...",
      "Finding you all the best courses...",
      "Pulling the latest courses live for you...",
      "Almost there....",
    ];
    let i = 0;
    const timer = setInterval(() => {
      setLoadingText(texts[i]);
      i++;
    }, 5000);
    return () => clearInterval(timer);
  }, [loadingText]);

  return (
    <div className="all-course-wr">
      {courses.length > 0 ? (
        // {!loading ? (
        courses.map((course) => {
          id++;
          return (
            <Course
              key={id}
              courseName={course.courseName}
              instructor={course.instructor}
              image={course.image}
              link={course.link}
            />
          );
        })
      ) : (
        <div className="loading-wr">
          <h2>{loadingText}</h2>
          <Loading
            className="loading"
            type={"spin"}
            color={"#80d4f7"}
            width={"20vw"}
          />
        </div>
      )}
    </div>
  );
};

CourseContainer.propTypes = {
  courses: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  courses: state.courses.courses,
  loading: state.courses.loading,
});

export default connect(mapStateToProps)(CourseContainer);
