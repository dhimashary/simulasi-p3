import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import TaskForm from "./pages/TaskForm";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-col">
        <SideBar />
        <Switch>
          <Route path="/add-task">
            <TaskForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
