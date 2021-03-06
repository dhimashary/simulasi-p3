import { useDispatch } from "react-redux";
import { deleteTaskAsync } from "../store/action";

export default function TaskRow ({ task, i }) {
  const dispatch = useDispatch()
  return (
    <tr >
      <th scope="row">{i+1}</th>
      <td>{task.title}</td>
      <td>{task.category}</td>
      <td>
        <button className="btn btn-outline-danger" onClick={() => dispatch(deleteTaskAsync(task.id))}>
          delete
        </button>
      </td>
    </tr>
  )
}