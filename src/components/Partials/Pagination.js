// import React from 'react'

// function Pagination() {
//     const [currentPage, setCurrentPage] = useState(1)
//     const [productPerPage] = useState(8)

//     const movies = useSelector(state => state.movies.movies)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(movieActions.movies())
//     }, [dispatch])


//     const indexOfLastPost = currentPage * productPerPage
//     const indexOfFirstPost = indexOfLastPost - productPerPage
//     const currentPosts = movies && movies.slice(indexOfFirstPost, indexOfLastPost)

//     const paginate = (pageNumber) => setCurrentPage(pageNumber)

//     const totalMovies = movies && movies.length

//     const pageNumbers = []
//     for (let i = 1; i <= Math.ceil(totalMovies / productPerPage); i++) {
//         pageNumbers.push(i)
//     }
//     return (
//         <nav>
//             <ul className="pagination">
//                 {pageNumbers.map(number => (
//                     <li key={number} className="page-item">
//                         <a href="nowshowing#" onClick={() => paginate(number)} className="page-link">
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }

// export default Pagination
