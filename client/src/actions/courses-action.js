import axios from "axios";

const GET_COURSES = "GET_COURSES";
const LOADING_COURSES = "LOADING_COURSES";
const COURSES_ERROR = "COURSES_ERROR";
const CLEAR_COURSES = "CLEAR_COURSES";

export const getCourses = (query) => async (dispatch) => {
  try {
    const res = await axios.get(`/search?course=${query}`);

    dispatch({ type: GET_COURSES, payload: res.data });
  } catch (err) {
    dispatch({
      type: COURSES_ERROR,
      payload: { msg: "Server Error on retrieving courses", status: 500 },
    });
  }
};

export const clearCourses = () => async (dispatch) => {
  dispatch({ type: CLEAR_COURSES });
};
export const loadingCourses = () => async (dispatch) => {
  dispatch({ type: LOADING_COURSES });
};
