import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createTaskAsync } from "../store/action";

export default function TaskForm() {
  const categories = ["Backend", "Frontend", "Fullstack"];
  const dispatch = useDispatch()
  const history = useHistory()
  const [error, setError] = useState('')

  const [formInput, setFormInput] = useState({
    category: "Backend",
    title: ""
  });

  const changeInputHandler = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="col-9 pt-5">
      {
        error ? <div className="alert alert-danger" role="alert">
          {error}
        </div> : null
      }
      <form onSubmit={(e) => {
        e.preventDefault()
        if(!formInput.title) {
          console.log('title nya diisi dulu')
          setError('Title di isi')
        } else {
          dispatch(createTaskAsync(formInput))
            .then(() => {
              history.push("/")
            })
            .catch(err => console.log(err))
        }
      }}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={changeInputHandler}
            value={formInput.title}
            name="title"
          />
        </div>
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
        <div className="mb-3">
          <input type="submit" className="btn btn-primary"/>
        </div>
      </form>
    </div>
  );
}
