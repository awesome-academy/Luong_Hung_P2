import React, { useEffect, useState } from "react";
import "../../../sass/movies.scss";
import { useSelector, useDispatch } from "react-redux";
import * as movieActions from "../../../actions/movies";
import BookingForm from "./BookingForm";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NowShowing(props) {
  const [isOpenModal, setIsOpenModal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);
  const [nowShowing, setNowShowing] = useState([])
  const [ticketMovieName, setTicketMovieName] = useState("")
  const movies = useSelector((state) => state.movies.movies);
  const account = useSelector((state) => state.currentUser.account);
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  const handleModal = (id, value) => {
    // if (!account) {
    //   props.history.push("/login")
    // } else {
    setIsOpenModal(id)
    setTicketMovieName(value)
    // }
  };

  const passIsOpen = (value) => {
    setIsOpenModal(value);
  };

  const passTicketMovieName = (value) => {
    setTicketMovieName(value)
  }

  useEffect(() => {
    dispatch(movieActions.movies());
  }, [dispatch]);

  useEffect(() => {
    if (movies !== null) {
      const result = [...movies].filter((movie) => {
        if (movie.status === 1) {
          return movie.status === 1;
        }
      });
      setNowShowing(() => [...result]);
    }
  }, [movies, setNowShowing]);

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentPosts =
    nowShowing && nowShowing.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalMovies = nowShowing && nowShowing.length;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / productPerPage); i++) {
    pageNumbers.push(i);
  }

  const showNowShowing = () => {
    const result = [];
    if (currentPosts) {
      currentPosts.forEach((movie, i) => {
        return result.push(
          <div className="col-12 col-sm-6 col-lg-3" key={i}>
            <div className="movie">
              <div className="wrap-image">
                <img
                  src={movie.image}
                  alt="image__movie"
                  className="movie__image"
                />
                <div className="wrap-movie__btn">
                  <button
                    className="movie__btn"
                    onClick={() => handleModal(movie.id, movie.name)}
                  >
                    {t("home.booking")}
                  </button>
                </div>
              </div>
              <Link
                onClick={() => dispatch(movieActions.detailMovie(movie))}
                to={`/detailMovie/${movie.id}`}
                className="movie__name"
                title={movie.name}
              >
                {movie.name}
              </Link>
              <div className="movie__genre movie__item">
                <span className="key">{t("home.genre")}: </span>
                <span className="value">{movie.type}</span>
              </div>
              <div className="movie__time movie__item">
                <span className="key">{t("home.runningTime")}: </span>
                <span className="value">
                  {movie.minutes} {t("home.minutes")}
                </span>
              </div>
              <div className="movie__date movie__item">
                <span className="key">{t("home.releaseDate")}: </span>
                <span className="value">{movie.releaseDate}</span>
              </div>
            </div>
            {/* {account ? ( */}
            <div className={isOpenModal === movie.id ? "" : "none"}>
              <BookingForm
                isOpenModal2={isOpenModal}
                passIsOpen={passIsOpen}
                movieNow={movie}
                ticketMovieName2={ticketMovieName}
                passTicketMovieName={passTicketMovieName}
              />
            </div>
            {/* ) : ( */}
            {/* "" */}
            {/* )} */}
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className="nowshowing">
      <div className="container">
        <div className="wrap-title">
          <span className="nowshowing__title">{t("home.nowShowing")}</span>
        </div>

        <div className="nowshowing__content">
          <div className="row">{showNowShowing()}</div>
        </div>

        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  href="nowshowing#"
                  onClick={() => paginate(number)}
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NowShowing;
