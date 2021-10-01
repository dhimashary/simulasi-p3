import {
  SET_TASKS,
  SET_FETCHED,
  SET_ISLOADING,
  SET_ISERROR,
  SET_ERROR,
  CREATE_TASKS,
  DELETE_TASKS,
  SET_CURRENT_PAGE
} from "./actionTypes";

const baseUrl = "http://localhost:3002"

export function setIsFetch(payload) {
  return {
    type: SET_FETCHED,
    payload: payload
  };
}

export function setIsLoading(payload) {
  return {
    type: SET_ISLOADING,
    payload: payload
  };
}

export function setIsError(payload) {
  return {
    type: SET_ISERROR,
    payload: payload
  };
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload: payload
  };
}

export function setCurrentPage(payload) {
  return {
    type: SET_CURRENT_PAGE,
    payload: payload
  };
}

export function setTasks(payload) {
  return {
    type: SET_TASKS,
    payload: payload
  };
}

export function createTask(payload) {
  return {
    type: CREATE_TASKS,
    payload: payload
  };
}

export function deleteTask(payload) {
  return {
    type: DELETE_TASKS,
    payload: payload
  };
}

export function getTasks() {
  return function (dispatch, getState) {
    dispatch(setIsLoading(true))
    const { currentPage } = getState()
    fetch(`${baseUrl}/tasks?_page=${currentPage}&_limit=5&_sort=id&_order=desc`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dispatch(setTasks(data));
        dispatch(setIsFetch(true));
      })
      .catch((err) => {
        dispatch(setIsError(true));
        dispatch(setError(err.message));
      })
      .finally((_) => {
        dispatch(setIsLoading(false));
      });
  };
}

export function createTaskAsync(formInput) {
  return function(dispatch) {
    dispatch(setIsLoading(true))
    return fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(formInput)
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(createTask(data));
      })
      .catch((err) => {
        dispatch(setIsError(true));
        dispatch(setError(err.message));
      })
      .finally((_) => {
        dispatch(setIsLoading(false));
      });
  }
};

export function deleteTaskAsync(id) {
  return function (dispatch) {
    return fetch(`${baseUrl}/tasks/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((_) => {
      dispatch(deleteTask(id));
    })
    .catch((err) => {
      dispatch(setIsError(true));
      dispatch(setError(err.message));
    })
    .finally((_) => {
      dispatch(setIsLoading(false));
    });
  }
};

