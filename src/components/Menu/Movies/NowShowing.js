import React, { useEffect, useState } from "react";
import "../../../sass/movies.scss";
import { useSelector, useDispatch } from "react-redux";
import * as movieActions from "../../../actions/movies";
import BookingForm from "./BookingForm";
import { useTranslation } from "react-i18next";

function NowShowing() {
  const [isOpenModal, setIsOpenModal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);
  const [nowShowing, setNowShowing] = useState([])
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  const handleModal = (id) => {
    setIsOpenModal(id)
  }

  const passIsOpen = (value) => {
    setIsOpenModal(value)
  }

  useEffect(() => {
    dispatch(movieActions.movies());
  }, [dispatch]);


  useEffect(() => {
    if (movies !== null) {
      const result = [...movies].filter((movie) => {
        if (movie.trangThai === 1) {
          return (
            movie.trangThai === 1
          )
        }
      })
      setNowShowing(() => [...result])

    }
  }, [movies, setNowShowing])

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
        const date = new Date(movie.ngayKhoiChieu);
        return result.push(
          <div className="col-12 col-sm-6 col-lg-3" key={i}>
            <div className="movie">
              <div className="wrap-image">
                <img
                  src={movie.hinhAnh}
                  alt="image__movie"
                  className="movie__image"
                />
                <div className="wrap-movie__btn">
                  <button
                    className="movie__btn"
                    onClick={() => handleModal(movie.id)}
                  >
                    {t("home.booking")}
                  </button>
                </div>
              </div>
              <div className="movie__name">{movie.tenPhim}</div>
              <div className="movie__genre movie__item">
                <span className="key">{t("home.genre")}: </span>
                <span className="value">{movie.theLoai}</span>
              </div>
              <div className="movie__time movie__item">
                <span className="key">{t("home.runningTime")}: </span>
                <span className="value">{movie.soPhut} {t("home.minutes")}</span>
              </div>
              <div className="movie__date movie__item">
                <span className="key">{t("home.releaseDate")}: </span>
                <span className="value">{date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}</span>
              </div>
            </div>
            <div className={isOpenModal === movie.id ? "" : "none"}>
              <BookingForm
                isOpenModal2={isOpenModal}
                passIsOpen={passIsOpen}
                movieNow={movie} />
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
