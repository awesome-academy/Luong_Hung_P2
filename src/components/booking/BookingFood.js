import React from "react";
import "../../sass/bookingFood.scss";

const BookingFood = () => {
  return (
    <div className="bookingFood">
      <div className="container">
        <div className="bookingFood__title">
          <span className="title">Booking Online</span>
        </div>
        <div className="bookingFood__infoBoard">
          <div className="bookingFood__infoBoard__header">
            <span className="content">Cinema</span>
            <span className="content">Cinema 2</span>
            <span className="content">Remaining(249/260)</span>
          </div>
          <div className="bookingFood__infoBoard__footer">
            <span className="date">01/09/2020</span>
            <span className="times">20:30 ~ 23:25</span>
          </div>
        </div>
        <div className="bookingFood__screen">Concession</div>
        <div className="bookingFood__main row">
          <div className="bookingFood__main__item">
            <img
              src="https://cms.megagscinemas.vn//media/76071/big-share.png"
              alt="image__food"
              className="image__food"
            />
            <div className="detail">
              <div className="detail__header">Combo 1</div>
              <div className="detail__content">1 Medium Popcorn + 1</div>
              <div className="detail__content">Jumbo Drink</div>
              <div className="detail__price">
                Price: <b>10$</b>
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
              <div className="detail__content">1 Medium Popcorn + 1</div>
              <div className="detail__content">Jumbo Drink</div>
              <div className="detail__price">
                Price: <b>10$</b>
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
              <div className="detail__content">1 Medium Popcorn + 1</div>
              <div className="detail__content">Jumbo Drink</div>
              <div className="detail__price">
                Price: <b>10$</b>
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
              <div className="detail__content">1 Medium Popcorn + 1</div>
              <div className="detail__content">Jumbo Drink</div>
              <div className="detail__price">
                Price: <b>10$</b>
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
          <span className="prev">&#10094; Prev</span>
          <span className="total">
            <div className="total__item">Movie: <b>30$</b></div>
            <div className="total__item">Combo: <b>30$</b></div>
            <div className="total__item">Total: <b>30$</b></div>
          </span>
          <span className="next">Next &#10095;</span>
        </div>
      </div>
    </div>
  );
};

export default BookingFood;
