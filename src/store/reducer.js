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
  currentPage: 1,
  lastPage: 3,
  isLoading: true,
  isError: false,
  error: null,
  isFetched: false
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
      return { ...state, tasks: [payload, ...state.tasks] };
    case DELETE_TASKS:
      const newTask = state.tasks.filter((task) => task.id !== payload);
      return { ...state, tasks: newTask };
    default:
      return state;
  }
}

export default reducer;
