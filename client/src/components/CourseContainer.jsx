import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PropTypes from "prop-types";
import Loading from "react-loading";

import Course from "./Course";

const CourseContainer = ({ courses, loading }) => {
  //key id for mapping the courses
  let id = 0;

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
      "Trust us, it's worth it...",
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
      {courses && courses.length > 0 ? (
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
          <SkeletonTheme color="#eee" highlightColor="#fff">
            <Skeleton
              className="skeleton-box"
              height={250}
              width={250}
              count={10}
            />
          </SkeletonTheme>
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
