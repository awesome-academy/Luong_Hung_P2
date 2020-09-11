import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import "../../sass/adminUser.scss";
import * as adminActions from "../../actions/admin";
import EditMovie from "./EditMovie";
import AddMovie from "./AddMovie";

const ManagementMovies = (props) => {
  const { t } = useTranslation("common");
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const movies = useSelector((state) => state.movies.movies);
  const [listMovies, setListMovies] = useState(movies);
  const [deleteMovie, setDeleteMovie] = useState(-1);
  const [isOpenModal, setIsOpenModal] = useState(0);
  const [isOpenModalAddMovie, setIsOpenModalAddMovie] = useState(false);
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();
  const [productPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const checkAdmin = () => {
    props.history.push("/");
  };

  const passIsOpen = (value) => {
    setIsOpenModal(value);
  };

  const passNameMovie = (value) => {
    setMovie(value);
  };

  const passIsOpenModalAddMovie = (value) => {
    setIsOpenModalAddMovie(value);
  };

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentPosts =
    movies && movies.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalMovies = movies && movies.length;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / productPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (deleteMovie !== -1) {
      movies.splice(deleteMovie, 1);
      setListMovies([...movies]);
      setDeleteMovie(-1);
    }
    if (movie) {
      movies.unshift(movie);
      setListMovies([...movies]);
      setMovie(null);
    } else setListMovies(movies);
  }, [movies, deleteMovie, movie]);

  const handleModal = (id) => {
    setIsOpenModal(id);
  };

  const showAdminMovies = () => {
    let result = [];
    result.push(
      <div className="adminUsers adminMovies" key={1}>
        <span onClick={() => setIsOpenModalAddMovie(true)} className="addMovie">
          {t("home.addMovie")}
        </span>
        <div className={isOpenModalAddMovie ? "" : "none"}>
          <AddMovie
            passIsOpenModalAddMovie={passIsOpenModalAddMovie}
            passNameMovie={passNameMovie}
            isOpenModalAddMovie={isOpenModalAddMovie}
          />
        </div>
        <table className="table">
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>{t("auth.image")}</th>
            <th>{t("auth.name")}</th>
            <th>{t("auth.minutes")}</th>
            <th>{t("home.releaseDate")}</th>
            <th>{t("auth.category")}</th>
            <th>{t("auth.status")}</th>
            <th>{t("auth.age")}</th>
            <th>{t("auth.pointIMDB")}</th>
            <th>{t("auth.type")}</th>
            <th>{t("auth.directors")}</th>
            <th>{t("auth.cast")}</th>
            <th>{t("auth.nation")}</th>
            <th className="description">{t("auth.description")}</th>
            <th>{t("auth.edit")}</th>
          </tr>
          {showMovie()}
        </table>
        <nav>
          <ul
            className="pagination"
            style={{ "justify-content": "flex-start", margin: "20px 0" }}
          >
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a onClick={() => paginate(number)} className="page-link">
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
    return result;
  };

  const showMovie = () => {
    let result = [];
    currentPosts &&
      currentPosts.forEach((movie, i) => {
        return result.push(
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{movie.id}</td>
            <td>
              <img src={movie.image} alt="avatar" className="avatar" />
            </td>
            <td>{movie.name}</td>
            <td>{movie.minutes}</td>
            <td>{movie.releaseDate}</td>
            <td>{movie.category}</td>
            <td>
              {movie.status === 1 ? t("home.nowShowing") : t("home.comingSoon")}
            </td>
            <td>{movie.age}</td>
            <td>{movie.pointIMDB}</td>
            <td>{movie.type}</td>
            <td>{movie.directors}</td>
            <td>{movie.cast}</td>
            <td>{movie.nation}</td>
            <td className="descriptions">{movie.description}</td>
            <td>
              <span className="edit" onClick={() => handleModal(movie.id)}>
                {t("auth.edit")}
              </span>
              &nbsp;
              <span className="delete" onClick={() => handleDeleteMovie(movie)}>
                {t("auth.delete")}
              </span>
            </td>
            <div className={isOpenModal === movie.id ? "" : "none"}>
              <EditMovie
                passIsOpen={passIsOpen}
                isOpenModal={isOpenModal}
                movie={movie}
              />
            </div>
          </tr>
        );
      });
    return result;
  };

  const handleDeleteMovie = (movie) => {
    dispatch(adminActions.deleteMovie(movie));
    const index = searchIndex(movie.id);
    if (index !== -1) {
      setDeleteMovie(index);
    }
  };

  const searchIndex = (id) => {
    let index = -1;
    listMovies.forEach((movie, i) => {
      if (movie.id === id) index = i;
    });
    return index;
  };

  return (
    <div className="wrapperAdminUsers">
      {currentUser && currentUser.email === "admin@admin"
        ? showAdminMovies()
        : checkAdmin()}
    </div>
  );
};

export default ManagementMovies;
