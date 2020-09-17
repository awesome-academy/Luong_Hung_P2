import React, { useEffect, useState } from "react";
import "../../sass/payment.scss";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import * as saveBookingActions from '../../actions/saveBooking'
import * as comboFoodAction from '../../actions/comboFood'
import { Link } from "react-router-dom";
import { addTicketRequest } from '../../actions/users'

const Payment = (props) => {

  const saveBooking = useSelector(state => state.saveBookingReducer.saveBooking)
  const getSeats = useSelector(state => state.seatReducer.seatData)
  const saveSeats = useSelector(state => state.saveSeatReducer.saveSeatData)
  const saveFoods = useSelector(state => state.saveFoodReducer.saveFoodData)
  const currentUser = useSelector(state => state.currentUser.account)
  const [bookedSeat, setBookedSeat] = useState([])
  const [count, setCount] = useState(saveSeats.length);
  const [discount, setDiscount] = useState(0)
  const [pay, setPay] = useState("CASH")
  const [listDay, setListDay] = useState("")

  const newCombo = saveFoods.combo
  const dispatch = useDispatch()




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
    const today = Date.now();


    const date = new Date(today);
    let month = "";
    let day = "";
    if (date.getMonth() + 1 < 10) {
      month = `0${date.getMonth() + 1}`;
    } else month = date.getMonth();
    if (date.getDate() < 10) {
      day = `0${date.getDate()}`;
    } else day = date.getDate();
    const stringDate = `${date.getFullYear()}-${month}-${day}`;

    setListDay(stringDate);
  }, []);

  useEffect(() => {
    setCount(saveSeats.seats.length);
  }, [saveSeats]);



  const handleSubmit = (event) => {
    event.preventDefault()
    let temp = {}

    temp.userId = currentUser[0].id
    temp.showDate = saveBooking.showDate
    temp.nameMovie = saveBooking.nameMovie
    temp.image = saveBooking.image
    temp.combo = newCombo
    temp.pay = pay
    temp.total = totalPrice()
    temp.count = count
    temp.discount = discount
    temp.showtimes = {
      nameTheater: saveBooking.nameTheater,
      screenings: saveBooking.screenings,
      nameBranch: saveBooking.nameBranch,
      showDate: saveBooking.showDate === 0 ?
        dateToday : saveBooking.showDate === 1 ?
          dateToday1 : saveBooking.showDate === 2 ?
            dateToday2 : dateToday3,
      cinemaRoom: saveBooking.cinemaRoom,
      seats: saveSeats.seats
    }
    temp.timeSet = listDay
    dispatch(addTicketRequest(temp))
    props.history.push("/");
  }
  //  end add ticket

  let newArrPrice = (saveSeats && saveSeats.arrMoviePrice)

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

    return totalMovie
  }


  const totalPrice = () => {
    return totalMoviePrice() + saveFoods.totalFood
  }
  useEffect(() => {
    dispatch(saveBookingActions.saveBookingRequest())
  }, [dispatch])

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


  const showRemaining = () => {
    if (getSeats !== null) {
      return getSeats && getSeats.map(seat =>
        <span className="content">{t("home.remaining")} ({bookedSeat.length}/{seat.numberSeat.length})</span>
      )
    }
  }

  const handlePay = (value) => {
    setPay(value)
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

  const { t } = useTranslation("common");
  return (
    <form className="payment" onSubmit={handleSubmit}>
      <div className="container">
        <div className="payment__title">
          <span className="title">{t("home.bookingOnline")}</span>
        </div>

        {showInfoBoard()}
        <div className="payment__main">
          <div className="payment__main__title">{t("home.totalPayment")}</div>
          <div className="payment__main__content">
            <div className="wrapper">
              <div className="pay">
                <span className="pay__content key">{t("home.paymentMovie")}</span>
                <span className="pay__content value">{totalMoviePrice().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".",)} VND</span>
              </div>
              <div className="pay">
                <div className="pay__content key">{t("home.paymentFood")}</div>
                <div className="pay__content value">{saveFoods.totalFood.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".",)} VND</div>
              </div>
              <div className="pay">
                <div className="pay__content key">{t("home.discount")}</div>
                <div className="pay__content value">0$</div>
              </div>
              <div className="total">{totalPrice().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".",)} VND</div>
            </div>
            <form>
              <label>{t("home.choosePay")}:</label>
              <label htmlFor="online">
                <input type="radio" name="pay" value="ATM" id="online" onChange={(e) => setPay(e.target.value)} /> ATM
              </label>
              <label htmlFor="offline">
                <input type="radio" name="pay" value="CASH" id="offline" onChange={(e) => setPay(e.target.value)} checked={pay === "CASH"} /> {t("home.cash")}
              </label>
            </form>
          </div>
        </div>
        <div className="payment__total">
          <span className="prev">
            <Link to="/bookingfood">&#10094; {t("home.prev")}</Link>
          </span>
          <span className="total">
            <button type="submit" className="total__item">{t("home.payment")}</button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Payment;
