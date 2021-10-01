import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="col-3">
      <p>Task Management</p>
      <button className="btn btn-primary mb-5">Task List</button>
      <button className="btn btn-primary">Create Task</button>
    </div>
  );
}
