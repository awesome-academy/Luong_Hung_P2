import React, { useEffect, useState } from "react";
import "../../sass/bookingFood.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as saveBookingActions from '../../actions/saveBooking'
import * as comboFoodAction from '../../actions/comboFood'
import { Link } from "react-router-dom";
import { saveFoodRequest, saveFoodSuccess } from "../../actions/saveFood";
const BookingFood = () => {
  const { t } = useTranslation("common");
  const saveBooking = useSelector(state => state.saveBookingReducer.saveBooking)
  const comboFoods = useSelector(state => state.comboFoodReducer.comboFoodData)
  const saveSeats = useSelector(state => state.saveSeatReducer.saveSeatData)
  const getSeats = useSelector(state => state.seatReducer.seatData)
  const dispatch = useDispatch()

  const [bookedSeat, setBookedSeat] = useState([])
  const [counter, setCounter] = useState(0)
  const [foodId, setFoodId] = useState(0);


  useEffect(() => {
    dispatch(comboFoodAction.comboFoodRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(saveBookingActions.saveBookingRequest())
  }, [dispatch])

  let newArrPrice = (saveSeats && saveSeats.arrMoviePrice)

  let today = new Date()
  let weekday = new Array(10);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  weekday[7] = "Sunday";
  weekday[8] = "Monday";
  weekday[9] = "Tuesday";
  let dateToday = (weekday[today.getDay()] +
    " - " + (today.getDate())
    + '/' + (today.getMonth() + 1))
  let dateToday1 = (weekday[today.getDay() + 1] +
    " - " + (today.getDate() + 1)
    + '/' + (today.getMonth() + 1))
  let dateToday2 = (weekday[today.getDay() + 2] +
    " - " + (today.getDate() + 2)
    + '/' + (today.getMonth() + 1))
  let dateToday3 = (weekday[today.getDay() + 3] +
    " - " + (today.getDate() + 3)
    + '/' + (today.getMonth() + 1))

  useEffect(() => {
    if (getSeats !== null) {
      const result = [...getSeats].filter((getSeat) => {
        let result2 = getSeat.numberSeat
        const result3 = [...result2].filter((status) => {
          return status.status === false
        })
        setBookedSeat(() => [...result3])
      })
    }
  }, [getSeats])

  const totalMoviePrice = () => {
    let totalMovie
    if (newArrPrice !== null) {
      totalMovie = newArrPrice.reduce((a, b) => a + b, 0)
    }
    // let regexPrice = total

    return totalMovie
  }

  const totalPrice = () => {
    return totalMoviePrice() + totalFoodPrice()
  }

  const showRemaining = () => {
    if (getSeats !== null) {
      return getSeats && getSeats.map(seat =>
        <span className="content">{t("home.remaining")} ({bookedSeat.length}/{seat.numberSeat.length})</span>
      )
    }
  }

  const showInfoBoard = () => {
    const result = []

    if (saveBooking !== null) {
      result.push(
        <div className="bookingSeats__infoBoard" key={1}>
          <div className="bookingSeats__infoBoard__header">
            <span className="content">{saveBooking.nameTheater}</span>
            <span className="content">Cinema {saveBooking.cinemaRoom}</span>
            {showRemaining()}
          </div>
          <div className="bookingSeats__infoBoard__footer">
            <span className="date">
              {saveBooking.showDate === 0 ?
                dateToday : saveBooking.showDate === 1 ?
                  dateToday1 : saveBooking.showDate === 2 ?
                    dateToday2 : dateToday3}
            </span>
            <span className="times">{saveBooking.screenings}</span>
          </div>
        </div>
      )
    }
    return result
  }

  const handleCounterIncrease = (comboFood) => {
    if (comboFood.id !== foodId) {
      setFoodId(comboFood.id);
      setCounter(1);
    } else {
      setCounter(counter + 1);
    }

  }

  const handleCounterDecrease = (comboFood) => {
    if (comboFood.id !== foodId) {
      setFoodId(comboFood.id);
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }

  const handleSaveBooking = () => {
    dispatch(saveFoodSuccess({
      combo: comboFoods,
      totalFood: totalFoodPrice()
    }))
  }

  const totalFoodPrice = () => {
    let total = 0;
    comboFoods && comboFoods.forEach((comboFood, i) => {
      if (comboFood.count > 0) {
        total = total + comboFood.count * comboFood.price;
      }
    });
    return total;
  }

  const showCounter = (comboFood) => {
    if (comboFood.id === foodId) {
      comboFood.count = counter;
    }
    return (
      <div className="detail__counts">
        <span
          className={counter === 0 ? "detail__counts__crease disabled-event" : "detail__counts__crease"}

          onClick={() => handleCounterDecrease(comboFood)}
        >-</span>

        <span className="detail__counts__count">
          {comboFood.count}
        </span>
        <span
          className="detail__counts__crease"
          onClick={() => handleCounterIncrease(comboFood)}
        >+</span>
      </div>
    )

  }



  const showComboFood = () => {
    return comboFoods && comboFoods.map((comboFood, i) =>
      <div className="bookingFood__main__item" key={i}>
        <img
          src={comboFood.image}
          alt="image__food"
          className="image__food"
        />
        <div className="detail">
          <div className="detail__header">Combo {comboFood.id}</div>
          <div className="detail__content">{comboFood.nameCombo}</div>
          <div className="detail__price">
            {t("home.price")}: <b>{comboFood.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".",)} VND</b>
          </div>

          {showCounter(comboFood)}

        </div>
      </div>
    )
  }

  return (
    <div className="bookingFood">
      <div className="container">
        <div className="bookingFood__title">
          <span className="title">{t("home.bookingOnline")}</span>
        </div>
        {showInfoBoard()}
        <div className="bookingFood__screen">{t("home.concession")}</div>

        <div className="bookingFood__main row">
          {showComboFood()}
        </div>
        <div className="bookingFood__total">
          <span className="prev">
            <Link to="/bookingseats">&#10094; {t("home.prev")}</Link>
          </span>
          <span className="total">
            <div className="total__item">{t("home.paymentMovie")}: <b>{totalMoviePrice().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".",)} VND</b></div>
            <div className="total__item">{t("home.paymentFood")}: <b>{totalFoodPrice().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".",)}</b></div>
            <div className="total__item">{t("home.total")}: <b>{totalPrice().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".",)} VND</b></div>
          </span>
          <span className="next">
            <Link
              to="/payment"
              onClick={handleSaveBooking}
            >{t("home.next")} &#10095;</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingFood;
