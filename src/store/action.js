import {
  SET_TASKS,
  SET_FETCHED,
  SET_ISLOADING,
  SET_ISERROR,
  SET_ERROR,
  CREATE_TASKS,
  DELETE_TASKS
} from "./actionTypes";

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
    const baseUrl = "";

    if (getState().isFetched) {
      return;
    } else {
      fetchData();
    }

    function fetchData() {
      dispatch(setIsLoading(true));
      fetch(baseUrl)
        .then((res) => res.json())
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
    }
  };
}

export function createTask(payload) {
  return function (dispatch) {
    const baseUrl = "";

    dispatch(setIsLoading(true));
    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(payload)
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
  };
}

export function deleteTask(id) {
  return function (dispatch, getState) {
    const baseUrl = "";

    dispatch(setIsLoading(true));
    fetch(`${baseUrl}/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((_) => {
        const currentState = JSON.parse(JSON.stringify(getState()));
        const newState = currentState.filter((state) => state.id !== id);
        dispatch(setTasks(newState));
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
