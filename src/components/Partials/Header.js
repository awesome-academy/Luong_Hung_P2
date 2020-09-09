import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function Header() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [t, i18n] = useTranslation("common");

  return (
    <header>
      <div className="header">
        <nav className="wrap-search">
          <input type="checkbox" id="toggle-menu" />
          <label htmlFor="toggle-menu" className="menu-icon">
            <AiOutlineMenuUnfold />
          </label>

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
            <div className="menu__item">
              <Link to="/membership">{t("header.membership")}</Link>
            </div>
          </div>
        </nav>

        <form>
          <input
            tpye="search"
            id="search"
            name="search"
            placeholder={t("header.placeholderSearch")}
          />
          <label htmlFor="search">{t("header.search")}</label>
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
