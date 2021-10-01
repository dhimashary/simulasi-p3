import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../store/action";
import TaskList from "../components/TaskList";

export default function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage)

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch, currentPage]);

  return (
    <div className="col-9">
      <h1>Home</h1>
      <TaskList />
    </div>
  );
}
