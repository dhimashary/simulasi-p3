import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, getFilteredTasks } from "../store/action";
import TaskList from "../components/TaskList";

export default function Home() {
  const dispatch = useDispatch();
  const categories = ["All", "Backend", "Frontend", "Fullstack"];

  const [formInput, setFormInput] = useState({
    category: "All",
    title: ""
  });

  const changeInputHandler = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });

    if(e.target.value === 'All') {
      dispatch(getTasks());
    } else {
      dispatch(getFilteredTasks(e.target.value))
    }
  };

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div className="col-9">
      <h1>Home</h1>
      <div className="mb-5">
        <label htmlFor="title" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={formInput.category}
          onChange={changeInputHandler}
          name="category"
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <TaskList />
    </div>
  );
}
