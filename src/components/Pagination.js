import { useSelector, useDispatch } from "react-redux"
import { setCurrentPage } from "../store/action"

export default function Pagination () {
  const dispatch = useDispatch()

  const lastPage = useSelector(state => state.lastPage)
  const generatePageList = () => {
    const pageList = []
    for (let i = 1; i <= lastPage; i++) {
      pageList.push(
      <button className="page-item" key={i} onClick={() => dispatch(setCurrentPage(i))}>
        <span className="page-link" >{i}</span>
      </button>)
    }
    return pageList
  }

  return <nav>
      <ul className="pagination">
        {
          generatePageList()
        }
      </ul>
    </nav>
}