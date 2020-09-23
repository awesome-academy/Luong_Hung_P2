import React, { useState, useEffect } from "react";
import "../../sass/bookingSeats.scss";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import * as saveBookingActions from "../../actions/saveBooking";
import * as seatAction from "../../actions/seats";
import * as saveSeatAction from "../../actions/saveSeat";
import { Link } from "react-router-dom";
const BookingSeats = () => {
  const [clickSeat, setClickSeat] = useState(0);
  const [clickPrice, setClickPrice] = useState(0);
  const [seatSession, setSeatSession] = useState([])
  // const saveBooking = useSelector(state => state.saveBookingReducer.saveBooking)
  const saveBooking = JSON.parse(window.localStorage.getItem("bookingForm"));
  const getSeats = useSelector((state) => state.seatReducer.seatData);
  const [arraySeat, setArraySeat] = useState([]);
  const [arrayPrice, setArrayPrice] = useState([]);
  const [bookedSeat, setBookedSeat] = useState([]);
  const [seatId, setSeatId] = useState(-1);
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  // save Seat

  // end save Seat
  useEffect(() => {
    dispatch(saveBookingActions.saveBookingRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(seatAction.seatRequest());
  }, [dispatch]);

  let today = new Date();
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
  let dateToday =
    weekday[today.getDay()] +
    " - " +
    today.getDate() +
    "/" +
    (today.getMonth() + 1);
  let dateToday1 =
    weekday[today.getDay() + 1] +
    " - " +
    (today.getDate() + 1) +
    "/" +
    (today.getMonth() + 1);
  let dateToday2 =
    weekday[today.getDay() + 2] +
    " - " +
    (today.getDate() + 2) +
    "/" +
    (today.getMonth() + 1);
  let dateToday3 =
    weekday[today.getDay() + 3] +
    " - " +
    (today.getDate() + 3) +
    "/" +
    (today.getMonth() + 1);

  useEffect(() => {
    if (clickSeat !== 0) {
      const clickSeatArr = arraySeat;
      const clickPriceArr = arrayPrice;
      if (clickSeatArr[0]) {
        let index = searchIndex(clickSeat);
        if (index === -1) {
          clickSeatArr.push(clickSeat);
          clickPriceArr.push(clickPrice);
        } else {
          clickSeatArr.splice(index, 1);
          clickPriceArr.splice(index, 1);
        }
      } else {
        clickSeatArr.push(clickSeat);
        clickPriceArr.push(clickPrice);
      }
      setArraySeat([...clickSeatArr]);
      setArrayPrice([...clickPriceArr]);
      setClickSeat(0);
    }
  }, [arraySeat, clickSeat, arrayPrice]);

  useEffect(() => {
    if (seatSession !== null) {
      const result = [...seatSession].filter((seat) => {
        return seat.status === false;
      });
      setBookedSeat(() => [...result]);
    }
  }, [seatSession]);


  useEffect(() => {
    if (getSeats !== null && saveBooking !== null) {
      const result = [...getSeats].filter((getSeat) => {
        if (getSeat.sessionId === saveBooking.sessionId &&
          saveBooking.screenings === getSeat.movieTime) {
          let result2 = getSeat.numberSeat;
          const result3 = [...result2].filter((status) => {
            return getSeat.id === saveBooking.sessionId
              && saveBooking.screenings === getSeat.movieTime
          });
          setSeatSession(() => [...result3]);
        }

      });
    }
  }, [getSeats]);



  const searchIndex = (value) => {
    let index = -1;
    if (arraySeat.length > 0) {
      for (let i = 0; i < arraySeat.length; i++) {
        if (arraySeat[i] === value) {
          index = i;
        }
      }
    }
    return index;
  };

  const handleSaveSeat = (e) => {
    e.preventDefault();

    window.localStorage.setItem(
      "bookingSeat",
      JSON.stringify({
        seats: arraySeat,
        arrMoviePrice: arrayPrice,
      })
    );

    window.localStorage.setItem(
      "bookedSeat",
      JSON.stringify({
        bookedSeat: bookedSeat,
        seatSession: seatSession
      })
    );

    dispatch(
      saveSeatAction.saveSeatSuccess({
        seats: arraySeat,
        arrMoviePrice: arrayPrice,
      })
    );
  };

  const handleClickSeat = (number) => {
    setClickSeat(number.codeSeat);
    setClickPrice(number.price);
    if (number.id !== seatId) {
      setSeatId(number.id);
    }
  };

  let newArrPrice = arrayPrice;

  const totalMoviePrice = () => {
    let total;
    if (newArrPrice !== undefined) {
      total = newArrPrice.reduce((a, b) => a + b, 0);
    }
    let regexPrice = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return <span>{regexPrice}</span>;
  };

  const showRemaining = () => {
    if (seatSession !== null) {
      return (

        <span className="content">
          {t("home.remaining")} ({bookedSeat.length}/{seatSession.length})
        </span>

      );
    }
  };

  const showInfoBoard = () => {
    const result = [];

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
              {saveBooking.showDate === 0
                ? dateToday
                : saveBooking.showDate === 1
                  ? dateToday1
                  : saveBooking.showDate === 2
                    ? dateToday2
                    : dateToday3}
            </span>
            <span className="times">{saveBooking.screenings}</span>
          </div>
        </div>
      );
    }
    return result;
  };

  // const showSeats = () => {
  //   const result = [];
  //   seatSession &&
  //     seatSession.map((seat) => {
  //       if (seat) {
  //         return result.push(numberSeat());
  //       }
  //     });
  //   return result;
  // };

  const numberSeat = () => {
    const result = [];

    seatSession &&
      seatSession.forEach((number, i) => {
        if (number) {
          let temp = searchIndex(number.codeSeat);;
          return result.push(
            <div
              className={
                number.status
                  ? "bookingSeats__seats__item booked"
                  : temp !== -1
                    ? "bookingSeats__seats__item active"
                    : "bookingSeats__seats__item"
              }
              key={i}
              onClick={() => handleClickSeat(number)}
            >
              {" "}
              {number.codeSeat}
            </div>
          );
        }
      });
    return result;
  };

  return (
    <div className="bookingSeats">
      <div className="container">
        <div className="bookingSeats__title">
          <span className="title">{t("home.bookingOnline")}</span>
        </div>

        {showInfoBoard()}

        <div className="bookingSeats__screen">{t("home.screen")}</div>
        <div className="bookingSeats__seats row">{numberSeat()}</div>
        <div className="bookingSeats__total">
          <span className="total">
            {t("home.paymentMovie")}: <b>{totalMoviePrice()} VND</b>
          </span>
          <span className="next" onClick={handleSaveSeat}>
            <Link to="/bookingfood">{t("home.next")} &#10095;</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingSeats;
