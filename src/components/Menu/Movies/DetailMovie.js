import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import BookingForm from "./BookingForm";
import * as pointActions from "../../../actions/point";
import * as adminActions from "../../../actions/admin";
import "../../../sass/detailMovie.scss";

const DetailMovie = (props) => {
  const movie = useSelector((state) => state.movies.movie);
  const [movie1, setMovie1] = useState(movie);
  const [isOpenModal, setIsOpenModal] = useState(0);
  const account = useSelector((state) => state.currentUser.account);
  const { t } = useTranslation("common");
  const [ticketMovieName, setTicketMovieName] = useState("");
  const dispatch = useDispatch();
  const points = useSelector((state) => state.points.points);
  const [listen, setListen] = useState(0);

  useEffect(() => {
    if(movie && listen !== 0) {
      setMovie1(movie)
    } else setMovie1(movie);
  }, [movie, listen]);

  const handlePoint = (point) => {
    let result = points;
    let mediumScore = 0;
    let count = 0;
    let templ = movie;
    if (point !== 0 && points) {
      let index1 = searchIndexMovie(points);
      if (index1 !== -1) {
        let index = searchIndex(points[index1].users);
        if (index !== -1) {
          result[index1].users[index].point = Number(point);
        } else {
          result[index1].users.push({
            usersId: account[0].id,
            point: Number(point),
          });
        }
      }
      points[index1].users.forEach((list, i) => {
        mediumScore = mediumScore + list.point;
        count = count + 1;
      });
      templ.pointIMDB = Math.round( mediumScore/count * 100 + Number.EPSILON ) / 100;
      dispatch(adminActions.editMovie(templ));
      dispatch(pointActions.editPost(result[index1]));
      setListen(listen + 1);
    } 
    return result;
  };

  const searchIndex = (lists) => {
    let index = -1;
    lists.forEach((list, i) => {
      if (list.usersId === account[0].id) index = i;
    });
    return index;
  };

  const searchIndexMovie = (lists) => {
    let index = -1;
    lists.forEach((list, i) => {
      if (list.id === movie.id) index = i;
    });
    return index;
  };

  const passIsOpen = (value) => {
    setIsOpenModal(value);
  };

  const handleModal = (id, value) => {
    if (!account) {
      props.history.push("/login");
    } else {
      setIsOpenModal(id);
      setTicketMovieName(value);
    }
  };

  const passTicketMovieName = (value) => {
    setTicketMovieName(value);
  };

  const showSelector = () => {
    let result = [];
    result.push(<option key={0}>{t("home.point")}</option>);
    for (let i = 1; i <= 10; i++) {
      result.push(
        <option key={i} value={i}>
          {i} {t("home.point")}
        </option>
      );
    }
    return result;
  };

  return movie && movie1 ? (
    <div className="detailMovie container">
      <div className="detailMovie__image">
        <img src={movie.image} alt="image" className="image" />
      </div>
      <div className="detailMovie__detail">
        <div className="detailMovie__detail__name">{movie.name}</div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.minutes")}:</b> {movie.minutes}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("home.releaseDate")}:</b> {movie.releaseDate}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.category")}:</b> {movie.category}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.status")}: </b>
          {movie.status === 1 ? t("home.nowShowing") : t("home.comingSoon")}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.pointIMDB")}:</b> {movie1.pointIMDB}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.age")}:</b> {movie.age}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.type")}:</b> {movie.type}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.directors")}:</b> {movie.directors}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.cast")}:</b> {movie.cast}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.nation")}:</b> {movie.nation}
        </div>
        <div className="detailMovie__detail__item">
          <b>{t("auth.description")}:</b> {movie.description}
        </div>
        {account && movie.status === 1 ? (
          <div className="detailMovie__detail__item">
            <b>{t("home.evaluate")}:</b>
            <select onChange={(e) => handlePoint(e.target.value)}>
              {showSelector()}
            </select>
          </div>
        ) : (
          ""
        )}
        {movie.status === 1 ? (
          <span
            className="detailMovie__booking"
            onClick={() => handleModal(movie.id)}
          >
            {t("home.booking")}
          </span>
        ) : (
          ""
        )}
        {account ? (
          <div className={isOpenModal === movie.id ? "" : "none"}>
            <BookingForm
              isOpenModal2={isOpenModal}
              passIsOpen={passIsOpen}
              movieNow={movie}
              ticketMovieName2={ticketMovieName}
              passTicketMovieName={passTicketMovieName}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default DetailMovie;
