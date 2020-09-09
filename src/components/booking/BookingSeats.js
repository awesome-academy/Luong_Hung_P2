import React from "react";
import "../../sass/bookingSeats.scss";
import { useTranslation } from "react-i18next";

const BookingSeats = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bookingSeats">
      <div className="container">
        <div className="bookingSeats__title"><span className="title">{t("home.bookingOnline")}</span></div>
        <div className="bookingSeats__infoBoard">
          <div className="bookingSeats__infoBoard__header">
            <span className="content">Cinema</span>
            <span className="content">Cinema 2</span>
            <span className="content">{t("home.remaining")} (249/260)</span>
          </div>
          <div className="bookingSeats__infoBoard__footer">
            <span className="date">01/09/2020</span>
            <span className="times">20:30 ~ 23:25</span>
          </div>
        </div>
        <div className="bookingSeats__screen">{t("home.screen")}</div>
        <div className="bookingSeats__seats row">
          <div className="bookingSeats__seats__item booked">A01</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
          <div className="bookingSeats__seats__item">A02</div>
        </div>
        <div className="bookingSeats__total">
          <span className="total">{t("home.paymentMovie")}: <b>30$</b></span>
          <span className="next">{t("home.next")} &#10095;</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSeats;
