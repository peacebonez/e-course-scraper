import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loading from "react-loading";

import Course from "./Course";

let id = 0;
const testCourses = [
  {
    courseName: "Digital MarketingFundamentals…",
    instructor: "Schools and Partners: EdinburghX…",
    image:
      "https://www.edx.org/sites/default/files/programme_image_-_digital_marketing.jpg",
    link:
      "https://www.edx.org/professional-certificate/edinburghx-digital-marketing-fundamentals",
  },
  {
    courseName: "Front-End Web Developer…",
    instructor: "Schools and Partners: W3Cx…",
    image: "https://www.edx.org/sites/default/files/discover-card.png",
    link:
      "https://www.edx.org/professional-certificate/w3cx-front-end-web-developer",
  },
  {
    courseName: "Computer Science forWeb Programming…",
    instructor: "Schools and Partners: HarvardX…",
    image:
      "https://www.edx.org/sites/default/files/luca-bravo-xjxwbfso2f0-unsplash-card.jpg",
    link:
      "https://www.edx.org/professional-certificate/harvardx-computer-science-for-web-programming",
  },
  {
    courseName: "UX Design and Evaluation…",
    instructor: "Schools and Partners: HECMontrealX…",
    image: "",
    link:
      "https://www.edx.org/micromasters/hecmontrealx-ux-design-and-evaluation",
  },
  {
    courseName: "HTML5 and CSSFundamentals…",
    instructor: "Schools and Partners: W3Cx…",
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/1a666720-9507-4ea7-992e-8a956c83d775-d70e7856c814.png",
    link: "https://www.edx.org/course/html5-and-css-fundamentals",
  },
  {
    courseName: "CSS Basics…",
    instructor: "Schools and Partners: W3Cx…",
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/32f1ba67-31e7-4b85-aa65-a4687036231c-80139b7286a9.png",
    link: "https://www.edx.org/course/css-basics",
  },
  {
    courseName: "Designing the UserExperience…",
    instructor: "Schools and Partners: UMD, USMx…",
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/16fb6d51-c901-495f-97d7-2f41257e4ec3-ea3b5d5b189d.png",
    link: "https://www.edx.org/course/designing-the-user-experience",
  },
  {
    courseName: "Theories of Media andTechnology…",
    instructor: "Schools and Partners: NYUx…",
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/389f66cf-95b3-4f18-85bf-5727bc2c1369-d5bd87a45cf8.jpg",
    link: "https://www.edx.org/course/theories-of-media-and-technology",
  },
  {
    courseName: "MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLSPg4-mrpUc6j14ZM5igwYpbJkthaa2rg7OYJAneYQsOJL6rlYWZzlUIH",
    link: "https://ocw.mit.edu/index.htm",
  },
  {
    courseName:
      "Software Engineering for Web Applications - MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmxO-uuCWyYW6W9jFZjMAZD-1jX-iHy4ZQ32N5zp-nJaZZVehRfCfj_w",
    link:
      "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-171-software-engineering-for-web-applications-fall-2003/",
  },
  {
    courseName: "Intelligent (Web) Design",
    instructor: "MIT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUxgi0K4JeA4YgIWY5In6jDcTG8Tg-cT6VQKn_A8Z979Y8a0S6JD5m_Q",
    link:
      "https://ocw.mit.edu/courses/comparative-media-studies-writing/21w-785-communicating-in-cyberspace-fall-2003/readings/designtalk.pdf",
  },
  {
    courseName: "Graphic Design | In-Class Activities - MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4qsa6UFKyQhh1cOiDM2uBCJjyZdGAq5dZpwZfssLyc_QzyTvtPGzpw_o",
    link:
      "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-831-user-interface-design-and-implementation-spring-2011/in-class-activities/graphic-design/",
  },
  {
    courseName: "User Interface Design and Implementation - MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4qsa6UFKyQhh1cOiDM2uBCJjyZdGAq5dZpwZfssLyc_QzyTvtPGzpw_o",
    link:
      "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-831-user-interface-design-and-implementation-spring-2011/",
  },
  {
    courseName: "Lecture Notes | Software Studio - MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXr4BKVtrgp02mvVYT9o76xq93zrJsyyAoQT8P6bzcvWb9LaWSqqrUNHU",
    link:
      "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-170-software-studio-spring-2013/lecture-notes/",
  },
  {
    courseName: "MIT OpenCourseWare to Launch Improved Site Design | MIT ...",
    instructor: "MIT",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLSPg4-mrpUc6j14ZM5igwYpbJkthaa2rg7OYJAneYQsOJL6rlYWZzlUIH",
    link: "https://ocw.mit.edu/about/press-releases/redesign-2012/",
  },
  {
    courseName:
      "Visual Design for the MIT Homepage | Essay 3 | Assignments ...",
    instructor: "MIT",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvE4aOzljZdB6bi2uRBil6y5-8aNhL_d0lZ7yug_voloXSjJ4mzSwWBGmT",
    link:
      "https://ocw.mit.edu/courses/comparative-media-studies-writing/21w-016-writing-and-rhetoric-designing-meaning-fall-2016/assignments/essay-3/visual-design-for-the-mit-homepage/",
  },
  {
    courseName: "Lecture 9: Securing Web Applications - MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDQAypbRFr0tWWulMSITLduw_smFob0THPSPI32Y5c2QGZyJbKj6U5utg",
    link:
      "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-858-computer-systems-security-fall-2014/video-lectures/lecture-9-securing-web-applications/",
  },
  {
    courseName: "Software Studio - MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXr4BKVtrgp02mvVYT9o76xq93zrJsyyAoQT8P6bzcvWb9LaWSqqrUNHU",
    link:
      "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-170-software-studio-spring-2013/",
  },
];

const CourseContainer = ({ courses }) => {
  const [loading, setLoading] = useState(false);
  // const [courses, setCourses] = useState(testCourses);

  useEffect(() => {});

  return (
    <div className="all-course-wr">
      {/* <Loading
        className="loading"
        type={"spin"}
        color={"#80d4f7"}
        width={"20vw"}
      /> */}
      {courses.length > 0
        ? courses.map((course) => {
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
        : testCourses.map((course) => {
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
          })}
    </div>
  );
};

CourseContainer.propTypes = {};

const mapStateToProps = (state) => ({
  courses: state.courses.courses,
});

export default connect(mapStateToProps)(CourseContainer);
