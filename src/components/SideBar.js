import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function SideBar() {
  const history = useHistory()
  return (
    <div className="col-3 px-3">
      <h2 className="mb-3">Task Management</h2>
      <div>
        <button className="btn btn-primary mb-5" style={{width: "100%"}} onClick={() => history.push('/')}>Task List</button>
      </div>
      <div>
        <button className="btn btn-primary" style={{width: "100%"}} onClick={() => history.push('/add-task')}>Create Task</button>
      </div>
    </div>
  );
}
