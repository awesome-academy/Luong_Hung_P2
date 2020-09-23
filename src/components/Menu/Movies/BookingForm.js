import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as bookingTimeAction from "../../../actions/bookingTime";
import * as theaterAction from "../../../actions/theaterAction";
import * as branchAction from "../../../actions/branchs";
import * as adminActions from "../../../actions/admin";
import * as saveBookingActions from "../../../actions/saveBooking";
import { movieTypeRequest } from "../../../actions/movieType";
import { Link } from "react-router-dom";

function BookingForm({ movieNow, passIsOpen, isOpenModal2 }) {
    const [isActiveType, setIsActiveType] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(isOpenModal2);
    const [isActiveBranch, setIsActiveBranch] = useState(1);
    const [isActiveDate, setIsActiveDate] = useState(0);
    const [newForm, setNewForm] = useState([]);
    const [newSession, setNewSession] = useState([]);
    const [newTheater, setNewTheater] = useState([]);
    const sessions = useSelector((state) => state.bookingTimeReducer.data);
    const branchs = useSelector((state) => state.branchReducer.data);
    const theaters = useSelector((state) => state.theaterReducer.data);
    const movies = useSelector((state) => state.movies.movies);
    const movieTypes = useSelector((state) => state.movieTypeReducer.data);
    const dispatch = useDispatch();
    const [newType, setNewType] = useState(movies);

    // add ticket
    const [ticketMovieName, setTicketMovieName] = useState("");
    const [ticketMovieImage, setTicketMovieImage] = useState("");
    const [combo, setCombo] = useState([]);
    const [timeSet, setTimeSet] = useState("");
    const [total, setTotal] = useState("");
    const [pay, setPay] = useState("");
    const [discount, setDiscount] = useState("");
    const [ticketShowTime, setTicketShowTime] = useState({});
    const [ticketShowDate, setTicketShowDate] = useState("");
    const [ticketBranch, setTicketBranch] = useState("");
    const [ticketTheater, setTicketTheater] = useState("");
    const [ticketType, setTicketType] = useState("");
    const [ticketSession, setTicketSession] = useState("");
    const [ticketRoom, setTicketRoom] = useState(0);
    const [active, setActive] = useState("");
    const [sessionId, setSessionId] = useState(0)
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     let temp = {}
    //     temp.showDate = ticketShowDate
    //     temp.nameMovie = ticketMovieName
    //     temp.nameBranch = ticketBranch
    //     temp.nameTheater = ticketTheater
    //     temp.type = ticketType
    //     temp.session = ticketSession

    //     dispatch(addTicketRequest(temp))
    // }
    //  end add ticket

    useEffect(() => {
        dispatch(bookingTimeAction.bookingTimeRequest());
    }, [dispatch]);

    useEffect(() => {
        dispatch(adminActions.ticket());
    }, [dispatch]);

    useEffect(() => {
        dispatch(movieTypeRequest());
    }, [dispatch]);

    useEffect(() => {
        dispatch(theaterAction.theaterRequest());
    }, [dispatch]);

    useEffect(() => {
        dispatch(branchAction.branchRequest());
    }, [dispatch]);

    useEffect(() => {
        setIsOpenModal(isOpenModal2);
    }, [isOpenModal2]);

    useEffect(() => {
        if (branchs !== null && theaters !== null) {
            const result = [...branchs].filter(() => {
                if (branchs.theaterId === theaters.id) {
                    return branchs.theaterId === theaters.id;
                }
            });
            setNewForm(() => [...result]);
        }
    }, [branchs, theaters, setNewForm]);

    useEffect(() => {
        if (theaters !== null && sessions !== null) {
            const result = [...theaters].filter(() => {
                if (sessions.theaterId === theaters.id) {
                    return sessions.theaterId === theaters.id;
                }
            });
            setNewTheater(() => [...result]);
        }
    }, [sessions, theaters, setNewTheater]);

    useEffect(() => {
        if (movies !== null && sessions !== null && newType !== null) {
            const result = [...sessions].filter(() => {
                if (
                    sessions.movieId === movies.id &&
                    newType.type === sessions.movieType
                ) {
                    return (
                        sessions.movieId === movies.id &&
                        newType.type === sessions.movieType
                    );
                }
            });
            setNewSession(() => [...result]);
        }
    }, [sessions, movies, setNewSession]);

    const handleModal = () => {
        setTicketSession("");
        setTicketTheater("");
        setTicketMovieName("");
        setTicketRoom(0);
        setTicketMovieImage("");
        setActive("");
        setIsActiveDate(0)
        setIsActiveBranch(1)
        setIsActiveType(0)
        passIsOpen(0);
    };

    const handleActiveType = (id, value, type) => {
        setIsActiveType(id);
        setNewType(value);
        setTicketType(type);
    };

    const handleTime = (session, theater, name, room, image, id) => {
        setTicketSession(session);
        setTicketTheater(theater);
        setTicketMovieName(name);
        setTicketRoom(room);
        setTicketMovieImage(image);
        setActive(session);
        setSessionId(id)
    };

    const handleSaveBooking = (e) => {
        e.preventDefault();

        window.localStorage.setItem(
            "bookingForm",
            JSON.stringify({
                showDate: ticketShowDate,
                nameMovie: ticketMovieName,
                nameBranch: ticketBranch,
                nameTheater: ticketTheater,
                type: ticketType,
                screenings: ticketSession,
                cinemaRoom: ticketRoom,
                image: ticketMovieImage,
                sessionId: sessionId
            })
        );
        dispatch(
            saveBookingActions.saveBookingSuccess({
                showDate: ticketShowDate,
                nameMovie: ticketMovieName,
                nameBranch: ticketBranch,
                nameTheater: ticketTheater,
                type: ticketType,
                screenings: ticketSession,
                cinemaRoom: ticketRoom,
                image: ticketMovieImage,
            })
        );
    };
    const handleActiveBranch = (id, value) => {
        setIsActiveBranch(id);
        setTicketBranch(value);
    };

    const handleActiveDate = (id, value) => {
        setIsActiveDate(id);
        setTicketShowDate(value);
    };

    const bookingFormDate = () => {
        let result = [];

        for (let i = 0; i < 4; i++) {
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
                weekday[today.getDay() + i] +
                " - " +
                (today.getDate() + i) +
                "/" +
                (today.getMonth() + 1);

            result.push(
                <span
                    className={
                        isActiveDate === i
                            ? "booking-form__date__item active"
                            : "booking-form__date__item"
                    }
                    onClick={() => handleActiveDate(i, i)}
                    key={i}
                >
                    {dateToday}
                </span>
            );
        }
        return result;
    };

    const showTime = (movieNow, theater) => {
        let result = [];
        newSession &&
            newSession.forEach((session) => {
                if (
                    session.movieId === movieNow.id &&
                    session.theaterId === theater.id &&
                    session.movieType === newType
                ) {
                    return result.push(mapSuatChieu(session, theater, movieNow));
                }
            });
        return result;
    };

    const mapSuatChieu = (session, theater, movieNow) => {
        return session.movieTime.map((time, i) => (
            <span
                className={
                    active === time && ticketTheater === theater.name
                        ? "booking-form__time__item active"
                        : "booking-form__time__item"
                }
                key={i}
            >
                <Link
                    onClick={() =>
                        handleTime(
                            time,
                            theater.name,
                            movieNow.name,
                            session.room,
                            movieNow.image,
                            session.id
                        )
                    }
                >
                    {time}
                </Link>
            </span>
        ));
    };

    const showTheater = (movieNow, movieTypes) => {
        let result = [];

        newTheater &&
            newTheater.forEach((theater, i) => {
                if (theater.branchId === isActiveBranch) {
                    return result.push(
                        <div className="booking-form__time" key={i}>
                            <div className="booking-form__time__name" key={theater.id}>
                                {theater.name}
                            </div>
                            <div className="row">
                                {showTime(movieNow, theater, movieTypes)}
                            </div>
                        </div>
                    );
                }
            });

        return result;
    };

    const showType = () => {
        return (
            movieTypes &&
            movieTypes.map((type, i) => (
                <span
                    className={
                        isActiveType === type.id
                            ? "booking-form__type__item active"
                            : "booking-form__type__item"
                    }
                    onClick={() => handleActiveType(type.id, type.type, type.type)}
                    key={i}
                >
                    {type.type}
                </span>
            ))
        );
    };

    const showBranch = () => {
        return (
            newForm &&
            newForm.map((branch, i) => (
                <span
                    className={
                        isActiveBranch === branch.id
                            ? "booking-form__city__item active"
                            : "booking-form__city__item"
                    }
                    onClick={() => handleActiveBranch(branch.id, branch.name)}
                    key={i}
                >
                    {branch.name}
                </span>
            ))
        );
    };

    const showMovieForm = (movieNow, movieTypes) => {
        if (movieNow !== null && theaters !== null && movieTypes !== null) {
            return (
                <div className="booking-form__inner">
                    <div className="booking-form__date row">{bookingFormDate()}</div>

                    <div className="booking-form__city row">{showBranch()}</div>

                    <div className="booking-form__type row">{showType()}</div>

                    {showTheater(movieNow, movieTypes)}
                </div>
            );
        }
    };

    return (
        <div
            className={
                !isOpenModal ? "booking-form-container none" : "booking-form-container"
            }
        >
            <div className="background-modal" onClick={handleModal}></div>
            <form className="booking-form">
                {showMovieForm(movieNow, movieTypes)}
                <button type="submit" onClick={handleSaveBooking}>
                    <Link to="/bookingseats">submit</Link>
                </button>
            </form>
        </div>
    );
}

export default BookingForm;