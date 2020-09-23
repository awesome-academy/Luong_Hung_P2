import React, { useEffect, useState } from "react";
import "../../../sass/movies.scss";
import { useSelector, useDispatch } from "react-redux";
import * as movieActions from "../../../actions/movies";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ComingSoon() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);
  const [comingSoon, setComingSoon] = useState([]);
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  useEffect(() => {
    dispatch(movieActions.movies());
  }, [dispatch]);

  useEffect(() => {
    if (movies !== null) {
      const result = [...movies].filter((movie) => {
        if (movie.status === 0) {
          return movie.status === 0;
        }
      });
      setComingSoon(() => [...result]);
    }
  }, [movies, setComingSoon]);

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentPosts =
    comingSoon && comingSoon.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalMovies = comingSoon && comingSoon.length;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / productPerPage); i++) {
    pageNumbers.push(i);
  }

  const showComingSoon = () => {
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
                  <button className="movie__btn">{t("home.booking")}</button>
                </div>
              </div>
              <Link
                to={`/detailMovie/${movie.id}`}
                onClick={() => dispatch(movieActions.detailMovie(movie))}
                className="movie__name"
                title={movie.name}
              >
                {movie.name}
              </Link>
              <div className="movie__genre movie__item">
                <span className="key">{t("home.genre")}: </span>
                <span className="value">{movie.types}</span>
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
          <span className="nowshowing__title">{t("home.comingSoon")}</span>
        </div>

        <div className="nowshowing__content">
          <div className="row">{showComingSoon()}</div>
        </div>

        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  href="comingSoon#"
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

export default ComingSoon;
