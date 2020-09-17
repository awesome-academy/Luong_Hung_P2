import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as uiActions from "../../actions/ui";
import * as searchActions from "../../actions/search";
import * as movieActions from "../../actions/movies";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function Header() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const toggleSidebar = useSelector((state) => state.ui.showSidebar);
  const movies = useSelector((state) => state.movies.movies);
  const [movieSearch, setMovieSearch] = useState([]);
  const movieKey = useSelector((state) => state.search.search);
  const [t, i18n] = useTranslation("common");
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieKey !== "") {
      const result = [...movies].filter((movie) => {
        return movie.name.toLowerCase().indexOf(movieKey.toLowerCase()) !== -1;
      });
      setMovieSearch([...result]);
    } else setMovieSearch([]);
  }, [movieKey, movies]);

  const handleDetailMovie = (movie) => {
    dispatch(uiActions.showLoading(true));
    setMovieSearch([]);
    setTimeout(() => {
      dispatch(movieActions.detailMovie(movie));
      dispatch(uiActions.hideLoading(false));
      dispatch(searchActions.searchMovie(""));
      document.getElementById("searchMovie").reset();
    }, 1000);
  };

  const showMovieSearch = () => {
    let result = [];
    if (movieSearch[0]) {
      if (movieSearch.length > 4) {
        for (let i = 0; i < 4; i++) {
          result.push(
            <Link
              className="movieSearch__wrapper"
              key={i}
              to="/detailMovie"
              onClick={() => handleDetailMovie(movieSearch[i])}
            >
              <div className="movieSearch__wrapper__image">
                <img
                  src={movieSearch[i].image}
                  alt="image_movie"
                  className="image__movie"
                />
              </div>
              <div className="movieSearch__wrapper__name">
                {movieSearch[i].name}
              </div>
            </Link>
          );
        }
      } else {
        for (let i = 0; i < movieSearch.length; i++) {
          result.push(
            <Link
              className="movieSearch__wrapper"
              key={i}
              onClick={() => handleDetailMovie(movieSearch[i])}
              to="/detailMovie"
            >
              <div className="movieSearch__wrapper__image">
                <img
                  src={movieSearch[i].image}
                  alt="image_movie"
                  className="image__movie"
                />
              </div>
              <div className="movieSearch__wrapper__name">
                {movieSearch[i].name}
              </div>
            </Link>
          );
        }
      }
    }
    return result;
  };

  return (
    <header>
      <div className="header">
        <nav className="wrap-search">
          <input type="checkbox" id="toggle-menu" />
          <label htmlFor="toggle-menu" className="menu-icon">
            <AiOutlineMenuUnfold />
          </label>
          {currentUser && currentUser.email === "admin@admin" ? (
            <AiOutlineMenuUnfold
              className="btn"
              onClick={() => dispatch(uiActions.toggleSidebar(!toggleSidebar))}
            />
          ) : (
              ""
            )}
          <Link className="header__link logo-cenima" to="/">
            Cinema
          </Link>

          <div className="menu">
            <div className="menu__item movies">
              <a>{t("header.movies")}</a>
              <div className="dropdown">
                <div className="dropdown__item">
                  <Link to="/nowshowing">Now Showing</Link>
                </div>
                <div className="dropdown__item">
                  <Link to="/comingsoon">Coming Soon</Link>
                </div>
              </div>
            </div>
            <div className="menu__item">
              <Link to="/theaters">{t("header.theaters")}</Link>
            </div>

          </div>
        </nav>

        <form id="searchMovie">
          <input
            type="search"
            id="search"
            autoComplete="off"
            placeholder={t("header.placeholderSearch")}
            onChange={(e) =>
              dispatch(searchActions.searchMovie(e.target.value))
            }
          />
          <label htmlFor="search">{t("header.search")}</label>
          <div className="movieSearch">{showMovieSearch()}</div>
        </form>

        <div className="header__login-register">
          {currentUser ? (
            <Link className="header__link item" to="/accountInformation">
              {t("header.profile")}
            </Link>
          ) : (
              <Link className="header__link item" to="/register">
                {t("header.register")}
              </Link>
            )}
          {currentUser ? (
            <Link className="header__link item" to="/logout">
              {t("header.logout")}
            </Link>
          ) : (
              <Link className="header__link item" to="/login">
                {t("header.login")}
              </Link>
            )}
        </div>

        <div className="header__translate">
          <span
            className={
              i18n.language === "en"
                ? "header__translate__EN active"
                : "header__translate__EN"
            }
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </span>
          <span
            className={
              i18n.language === "vi"
                ? "header__translate__VI active"
                : "header__translate__VI"
            }
            onClick={() => i18n.changeLanguage("vi")}
          >
            VI
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
