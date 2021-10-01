import {
  SET_ISLOADING,
  SET_FETCHED,
  SET_ISERROR,
  SET_TASKS,
  SET_ERROR,
  CREATE_TASKS,
  DELETE_TASKS
} from "./actionTypes";

const initialState = {
  tasks: [],
  isLoading: true,
  isError: false,
  error: null,
  isFetched: true
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_FETCHED:
      return { ...state, isFetched: payload };
    case SET_ISLOADING:
      return { ...state, isLoading: payload };
    case SET_ISERROR:
      return { ...state, isError: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    case SET_TASKS:
      return { ...state, tasks: payload };
    case CREATE_TASKS:
      return { ...state, tasks: payload };
    default:
      return state;
  }
}

export default reducer;
