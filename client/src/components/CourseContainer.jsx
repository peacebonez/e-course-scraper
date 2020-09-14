import React, { useState } from "react";
import PropTypes from "prop-types";
import Loading from "react-loading";

import Course from "./Course";

let id = 0;
const testCourses = [
  {
    courseName: "MathTrackX…",
    instructor: "Schools and Partners: AdelaideX…",
    image:
      "https://www.edx.org/sites/default/files/a7fb93c8-ac95-4313-a4be-8958d3ea7bd1.jpeg",
    link: "https://www.edx.org/xseries/adelaidex-math-trackx",
  },
  {
    courseName: "Elements of Data Science…",
    instructor: "Schools and Partners: RICEx…",
    image:
      "https://www.edx.org/sites/default/files/mb_compsci_courseimage_378x225.jpg",
    link: "https://www.edx.org/microbachelors/ricex-elements-of-data-science",
  },
  {
    courseName: "Data Analysis for LifeSciences…",
    instructor: "Schools and Partners: HarvardX…",
    image:
      "https://www.edx.org/sites/default/files/john-adams-1xin4fmr78a-unsplash-card_0.jpg",
    link:
      "https://www.edx.org/professional-certificate/harvardx-data-analysis-for-life-sciences",
  },
  {
    courseName: "Statistics and DataScience…",
    instructor: "Schools and Partners: MITx…",
    image:
      "https://www.edx.org/sites/default/files/program_image_coursecard.jpg",
    link: "https://www.edx.org/micromasters/mitx-statistics-and-data-science",
  },
  {
    courseName:
      "A-level Mathematics forYear 12 - Course 1:Algebraic Methods, Gra……",
    instructor: "Schools and Partners: ImperialX…",
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/37a24f56-f624-41f2-859f-fda43f451e54-c510e1ec2f30.jpg",
    link:
      "https://www.edx.org/course/a-level-mathematics-for-year-12-course-1-algebraic",
  },
  {
    courseName: "Maths Essentials…",
    instructor: "Schools and Partners: ImperialBusinessX, ImperialX…",
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/07523ff1-f015-4987-9a54-4ab6d69ed955-2a8b4f43957e.jpg",
    link: "https://www.edx.org/course/maths-essentials",
  },
  {
    courseName: "MathTrackX:Polynomials, Functionsand Graphs…",
    instructor: "Schools and Partners: AdelaideX…",
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/834a2b41-9713-4ec2-a65a-236fa5b4cf50-fb4d220f125f.jpeg",
    link:
      "https://www.edx.org/course/mathtrackx-polynomials-functions-and-graphs",
  },
  {
    courseName: "Fundamentals ofFinancial Mathematicsand Capital Budgeting…",
    instructor: "Schools and Partners: NYIF…",
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/669905cf-e1eb-4a36-8d95-f6b6cfea1b2f-e412f02e016a.jpeg",
    link:
      "https://www.edx.org/course/fundamental-of-financial-mathematics-and-capital-budgeting",
  },
  {
    courseName:
      "Mathematics | MIT OpenCourseWare | Free Online Course Materials",
    instructor: "MIT",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLSPg4-mrpUc6j14ZM5igwYpbJkthaa2rg7OYJAneYQsOJL6rlYWZzlUIH",
    link: "https://ocw.mit.edu/courses/mathematics/",
  },
  {
    courseName: "Mathematics for Computer Science - MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYNPNP29zmxwR5_8ST1x0hOaJUgGwSa6URZWSTzrfvnx2BPh77nrSJGK6",
    link:
      "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/",
  },
  {
    courseName: "18.S096 Topics in Mathematics with Applications in Finance",
    instructor: "MIT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCoskeLWKwc6rMwfPTwrCIbtGsxqk1YktBSS2f9JSiBzOTChVx6hEeWv4",
    link:
      "https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/",
  },
  {
    courseName: "Mathematics for Computer Science - MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbEGNaVfVmDL-x21TNec7Pj5zxHI01JdBxO1AVDJDJiW2cYfXEvYPEBn4",
    link:
      "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/",
  },
  {
    courseName: "Linear Algebra | Mathematics | MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTImXnxsmmoUbrqe5Rv7lakz074atPaYhj5vXm6My5Dnel_HLR3hRjNfB7",
    link:
      "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/",
  },
  {
    courseName:
      "Matrix Methods in Data Analysis, Signal Processing, and Machine ...",
    instructor: "MIT",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLrTbGowHqkVxKyhXfFjUJiACP9uL-RNEvHwah_Zu3RizpsYrWI1_bMsU",
    link:
      "https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/",
  },
  {
    courseName: "Multivariable Calculus | Mathematics | MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNzKUGKj-TImActM7_b8tfgarYQjpjbLkAN2FkJ3kS-yfC2gxv6U7WbBo1",
    link:
      "https://ocw.mit.edu/courses/mathematics/18-02-multivariable-calculus-fall-2007/",
  },
  {
    courseName:
      "Audio/Video Lectures | MIT OpenCourseWare - MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLSPg4-mrpUc6j14ZM5igwYpbJkthaa2rg7OYJAneYQsOJL6rlYWZzlUIH",
    link: "https://ocw.mit.edu/courses/audio-video-courses/",
  },
  {
    courseName: "Differential Equations | Mathematics | MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6LmmCSwCLJyX16CMImNSdEEBHKpKbT_yQGPmbTbuDrTd1lAxec3LL-M",
    link:
      "https://ocw.mit.edu/courses/mathematics/18-03-differential-equations-spring-2010/",
  },
  {
    courseName:
      "Street-Fighting Mathematics | Mathematics | MIT OpenCourseWare",
    instructor: "MIT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbpsxccS8onW4NHrU6tYsjyM-J4i1emRxqa2vFhXgNRdcBU9FVeUbPZM5",
    link:
      "https://ocw.mit.edu/courses/mathematics/18-098-street-fighting-mathematics-january-iap-2008/",
  },
];

const CourseContainer = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  return (
    <div className="all-course-wr">
      {/* <Loading
        className="loading"
        type={"spin"}
        color={"#80d4f7"}
        width={"20vw"}
      /> */}
      {testCourses.map((course) => {
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

export default CourseContainer;
