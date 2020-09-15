const GET_COURSES = "GET_COURSES";
const LOADING_COURSES = "LOADING_COURSES";
const CLEAR_COURSES = "CLEAR_COURSES";
const COURSES_ERROR = "COURSES_ERROR";

const initialState = {
  courses: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COURSES:
      return {
        courses: payload,
        loading: false,
      };
    case COURSES_ERROR:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_COURSES:
      return {
        courses: [],
        // loading: false,
        error: {},
      };
    case LOADING_COURSES:
    default:
      return state;
  }
}
