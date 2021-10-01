import { useSelector } from "react-redux"
import TaskRow from "./TaskRow"
import Pagination from "./Pagination"

export default function TaskList () {
  const tasks = useSelector(state => state.tasks)
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task, i) => <TaskRow task={task} i={i} key={task.id}/>)
          }
        </tbody>
      </table>
      <Pagination />
    </>
  )
}