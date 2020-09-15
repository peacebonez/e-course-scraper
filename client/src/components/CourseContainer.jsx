import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loading from "react-loading";

import Course from "./Course";

const CourseContainer = ({ courses, loading }) => {
  //key id for mapping the courses
  let id = 0;
  console.log("courses from reducer:", courses);

  //dynamic text displayed during loading courses
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    const texts = [
      "Fetching courses...",
      "Finding you all the best courses...",
      "Scraping the latest courses for you...",
      "Almost there...",
      "So close...",
      "Warmer...",
      "Trust me, it's worth it...",
    ];
    let i = 0;
    let timer = setInterval(() => {
      //if we an out of messages reset messages to 0 index
      if (!texts[i]) i = 0;
      setLoadingText(texts[i]);
      i++;
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
