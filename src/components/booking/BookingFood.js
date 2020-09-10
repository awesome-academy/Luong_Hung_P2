import React from "react";
import "../../sass/bookingFood.scss";
import { useTranslation } from "react-i18next";

const BookingFood = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bookingFood">
      <div className="container">
        <div className="bookingFood__title">
          <span className="title">{t("home.bookingOnline")}</span>
        </div>
        <div className="bookingFood__infoBoard">
          <div className="bookingFood__infoBoard__header">
            <span className="content">Cinema</span>
            <span className="content">Cinema 2</span>
            <span className="content">{t("home.remaining")} (249/260)</span>
          </div>
          <div className="bookingFood__infoBoard__footer">
            <span className="date">01/09/2020</span>
            <span className="times">20:30 ~ 23:25</span>
          </div>
        </div>
        <div className="bookingFood__screen">{t("home.concession")}</div>
        <div className="bookingFood__main row">
          <div className="bookingFood__main__item">
            <img
              src="https://cms.megagscinemas.vn//media/76071/big-share.png"
              alt="image__food"
              className="image__food"
            />
            <div className="detail">
              <div className="detail__header">Combo 1</div>
              <div className="detail__content">1 Medium Popcorn, 1 Jumbo Drink</div>
              <div className="detail__price">
              {t("home.price")}: <b>10$</b>
              </div>
              <div className="detail__counts">
                <span className="detail__counts__crease">-</span>
                <span className="detail__counts__count">1</span>
                <span className="detail__counts__crease">+</span>
              </div>
            </div>
          </div>
          <div className="bookingFood__main__item">
            <img
              src="https://cms.megagscinemas.vn//media/76071/big-share.png"
              alt="image__food"
              className="image__food"
            />
            <div className="detail">
              <div className="detail__header">Combo 1</div>
              <div className="detail__content">1 Medium Popcorn, 1 Jumbo Drink</div>
              <div className="detail__price">
              {t("home.price")}: <b>10$</b>
              </div>
              <div className="detail__counts">
                <span className="detail__counts__crease">-</span>
                <span className="detail__counts__count">1</span>
                <span className="detail__counts__crease">+</span>
              </div>
            </div>
          </div>
          <div className="bookingFood__main__item">
            <img
              src="https://cms.megagscinemas.vn//media/76071/big-share.png"
              alt="image__food"
              className="image__food"
            />
            <div className="detail">
              <div className="detail__header">Combo 1</div>
              <div className="detail__content">1 Medium Popcorn, 1 Jumbo Drink</div>
              <div className="detail__price">
                {t("home.price")}: <b>10$</b>
              </div>
              <div className="detail__counts">
                <span className="detail__counts__crease">-</span>
                <span className="detail__counts__count">1</span>
                <span className="detail__counts__crease">+</span>
              </div>
            </div>
          </div>
          <div className="bookingFood__main__item">
            <img
              src="https://cms.megagscinemas.vn//media/76071/big-share.png"
              alt="image__food"
              className="image__food"
            />
            <div className="detail">
              <div className="detail__header">Combo 1</div>
              <div className="detail__content">1 Medium Popcorn, 1 Jumbo Drink</div>
              <div className="detail__price">
              {t("home.price")}: <b>10$</b>
              </div>
              <div className="detail__counts">
                <span className="detail__counts__crease">-</span>
                <span className="detail__counts__count">1</span>
                <span className="detail__counts__crease">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bookingFood__total">
          <span className="prev">&#10094; {t("home.prev")}</span>
          <span className="total">
            <div className="total__item">{t("home.paymentMovie")}: <b>30$</b></div>
            <div className="total__item">{t("home.paymentFood")}: <b>30$</b></div>
            <div className="total__item">{t("home.total")}: <b>30$</b></div>
          </span>
          <span className="next">{t("home.next")} &#10095;</span>
        </div>
      </div>
    </div>
  );
};

export default BookingFood;
