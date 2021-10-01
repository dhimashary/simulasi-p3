import { useSelector, useDispatch } from "react-redux"

export default function Pagination () {
  const lastPage = useSelector(state => state.lastPage)
  const generatePageList = () => {
    const pageList = []
    for (let i = 1; i <= lastPage; i++) {
      pageList.push(
      <li className="page-item" key={i}>
        <span className="page-link" >{i}</span>
      </li>)
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