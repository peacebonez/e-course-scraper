import axios from "axios";

const GET_COURSES = "GET_COURSES";
const COURSES_ERROR = "COURSES_ERROR";

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
