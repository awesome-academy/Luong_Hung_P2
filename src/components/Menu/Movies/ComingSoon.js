import React, { useEffect, useState } from 'react'
import "../../../sass/movies.scss";
import { useSelector, useDispatch } from 'react-redux';
import * as movieActions from "../../../actions/movies";

function ComingSoon() {
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(8)

    const movies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.movies())
    }, [dispatch])


    console.log(movies && movies.length, "currentPage")

    const indexOfLastPost = currentPage * productPerPage
    const indexOfFirstPost = indexOfLastPost - productPerPage
    const currentPosts = movies && movies.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const totalMovies = movies && movies.length

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalMovies / productPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div className="nowshowing">
            <div className="container">
                <div className="wrap-title">
                    <span className="nowshowing__title">Coming Soon</span>
                </div>

                <div className="nowshowing__content">
                    <div className="row">
                        {
                            currentPosts && currentPosts.map((movie, i) =>
                                <div className="col-12 col-sm-6 col-lg-3" key={i}>
                                    <div className='movie'>
                                        <div className="wrap-image">
                                            <img
                                                src={movie.hinhAnh}
                                                alt='image__movie'
                                                className='movie__image'
                                            />
                                            <div className="wrap-movie__btn">
                                                <button className='movie__btn'>Booking</button>
                                            </div>
                                        </div>
                                        <div className='movie__name'>
                                            {movie.tenPhim}
                                        </div>
                                        <div className="movie__genre movie__item">
                                            <span className="key">Genre: </span>
                                            <span className="value">{movie.theLoai}</span>
                                        </div>
                                        <div className="movie__time movie__item">
                                            <span className="key">Running Time: </span>
                                            <span className="value">{movie.soPhut} minutes</span>
                                        </div>
                                        <div className="movie__date movie__item">
                                            <span className="key">Release date: </span>
                                            <span className="value">{movie.ngayKhoiChieu}</span>
                                        </div>

                                    </div>
                                </div>)
                        }

                    </div>
                </div>

                <nav>
                    <ul className="pagination">
                        {pageNumbers.map(number => (
                            <li key={number} className="page-item">
                                <a href="comingSoon#" onClick={() => paginate(number)} className="page-link">
                                    {number}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>

        </div>
    )
}

export default ComingSoon
