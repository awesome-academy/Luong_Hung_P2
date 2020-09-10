import React from "react";
import "../../sass/payment.scss";
import { useTranslation } from "react-i18next";

const Payment = () => {
  const { t } = useTranslation("common");
  return (
    <div className="payment">
      <div className="container">
        <div className="payment__title">
          <span className="title">{t("home.bookingOnline")}</span>
        </div>
        <div className="payment__infoBoard">
          <div className="payment__infoBoard__header">
            <span className="content">Cinema</span>
            <span className="content">Cinema 2</span>
            <span className="content">{t("home.remaining")} (249/260)</span>
          </div>
          <div className="payment__infoBoard__footer">
            <span className="date">01/09/2020</span>
            <span className="times">20:30 ~ 23:25</span>
          </div>
        </div>
        <div className="payment__main">
          <div className="payment__main__title">{t("home.totalPayment")}</div>
          <div className="payment__main__content">
            <div className="wrapper">
              <div className="pay">
                <span className="pay__content">{t("home.paymentMovie")}</span>
                <span className="pay__content">30$</span>
              </div>
              <div className="pay">
                <div className="pay__content">{t("home.paymentFood")}</div>
                <div className="pay__content">20$</div>
              </div>
              <div className="pay">
                <div className="pay__content">{t("home.discount")}</div>
                <div className="pay__content">0$</div>
              </div>
              <div className="total">50$</div>
            </div>
            <form>
              <label>{t("home.choosePay")}:</label>
              <label htmlFor="online">
                <input type="radio" name="pay" id="online" /> ATM
              </label>
              <label htmlFor="offline">
                <input type="radio" name="pay" id="offline" /> {t("home.cash")}
              </label>
            </form>
          </div>
        </div>
        <div className="payment__total">
          <span className="prev">&#10094; {t("home.prev")}</span>
          <span className="total">
            <div className="total__item">{t("home.payment")}</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
