import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import icon_ticket from "../../images/icon-ticket.png";

const ShowTicket = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(props.isOpenModal);
  const { t } = useTranslation("common");
  const [ticket, setTicket] = useState(props.ticket);

  useEffect(() => {
    setIsOpenModal(props.isOpenModal);
  }, [props.isOpenModal]);

  useEffect(() => {
    setTicket(props.ticket);
  }, [props.ticket]);

  const handleModal = () => {
    props.passIsOpen(0);
  };

  const showCombo = () => {
    let result = [];
    ticket.combo.forEach((combo, i) => {
      return result.push(
        <div className="left__item" key={i}>
          <div className="left__item__title">{combo.nameCombo}</div>
          <div className="left__item__price">
            {combo.count} x {combo.price} VNĐ
          </div>
        </div>
      );
    });
    return result;
  };

  const showSeats = (seats) => {
    let result = [];
    seats.forEach((seat, i) => {
      return result.push(
        <div className="item" key={i}>
          {seat}
        </div>
      );
    });
    return result;
  };

  return (
    <div
      className={
        !isOpenModal ? "booking-form-container none" : "booking-form-container"
      }
    >
      <div className="background-modal" onClick={handleModal}></div>
      <div className="booking-form">
        <div className="booking-form__inner">
          <div className="wrapper">
            <div className="left">
              <div className="left__account">
                {t("home.account")}: {ticket.nameUser}
              </div>
              <div className="left__information">
                <img src={icon_ticket} alt="icon_ticket" className="icon" />{" "}
                {t("home.ticketingInformation")}
              </div>
              <div className="left__item">
                <div className="left__item__title">{t("home.ticket")}</div>
                <div className="left__item__price">
                  {ticket.count} x 75000 VNĐ
                </div>
              </div>
              {showCombo()}
              <div className="left__total">
                {t("home.total")}: {ticket.total}
              </div>
              <div className="left__pay">
                {t("home.pay")}: {ticket.pay}
              </div>
            </div>
            <div className="right">
              <img
                src={ticket.image}
                alt="image_movie"
                className="right__image"
              />
              <div className="right--center">{ticket.nameMovie}</div>
              <div className="right--center">
                {t("auth.nameTheater")}: {ticket.showtimes.nameTheater}
              </div>
              <div className="right__item">
                <div>
                  <div className="item">{t("home.screenings")}</div>
                  <div className="item">{ticket.showtimes.screenings}</div>
                </div>
                <div>
                  <div className="item">{t("home.showDate")}</div>
                  <div className="item">{ticket.showtimes.showDate}</div>
                </div>
              </div>
              <div className="right__item">
                <div>
                  <div className="item">{t("home.cinemaRoom")}</div>
                  <div className="item">{ticket.showtimes.cinemaRoom}</div>
                </div>
                <div>
                  <div className="item">{t("home.seats")}</div>
                  {showSeats(ticket.showtimes.seats)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTicket;
