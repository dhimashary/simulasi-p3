import { useState } from "react";

export default function TaskForm() {
  const categories = ["Backend", "Frontend", "Fullstack"];

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
    <div className="col-9">
      <form>
        <div className="mb-3">
          <label for="title" className="form-label">
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
        <div className="mb-3">
          <label for="title" className="form-label">
            Category
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={formInput.category}
            onChange={changeInputHandler}
          >
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
