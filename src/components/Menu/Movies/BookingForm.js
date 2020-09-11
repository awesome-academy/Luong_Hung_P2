import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as bookingTimeAction from "../../../actions/bookingTime";
import * as theaterAction from '../../../actions/theaterAction'
import * as branchAction from '../../../actions/branchs'
import { movieTypeRequest } from '../../../actions/movieType';
function BookingForm({ movieNow, passIsOpen, isOpenModal2 }) {
    const [isActiveType, setIsActiveType] = useState(1)
    const [isOpenModal, setIsOpenModal] = useState(isOpenModal2)
    const [isActiveBranch, setIsActiveBranch] = useState(1)
    const [isActiveDate, setIsActiveDate] = useState(0)
    const [newForm, setNewForm] = useState([])
    const [newSession, setNewSession] = useState([])
    const [newTheater, setNewTheater] = useState([])
    const sessions = useSelector(state => state.bookingTimeReducer.data)
    const branchs = useSelector(state => state.branchReducer.data)
    const theaters = useSelector(state => state.theaterReducer.data)
    const movies = useSelector(state => state.movies.movies)
    const movieTypes = useSelector(state => state.movieTypeReducer.data)
    const dispatch = useDispatch()
    const [newType, setNewType] = useState(movies)

    useEffect(() => {
        dispatch(bookingTimeAction.bookingTimeRequest())
    }, [dispatch])

    useEffect(() => {
        dispatch(movieTypeRequest())
    }, [dispatch])

    useEffect(() => {
        dispatch(theaterAction.theaterRequest())
    }, [dispatch])

    useEffect(() => {
        dispatch(branchAction.branchRequest())
    }, [dispatch])

    useEffect(() => {
        setIsOpenModal(isOpenModal2)
    }, [isOpenModal2])

    useEffect(() => {
        if (branchs !== null && theaters !== null) {
            const result = [...branchs].filter(() => {
                if (branchs.theaterId === theaters.id) {
                    return (
                        branchs.theaterId === theaters.id
                    )
                }
            })
            setNewForm(() => [...result])
        }
    }, [branchs, theaters, setNewForm])


    useEffect(() => {
        if (theaters !== null && sessions !== null) {

            const result = [...theaters].filter(() => {
                if (sessions.theaterId === theaters.id) {
                    return (
                        sessions.theaterId === theaters.id
                    )
                }
            })
            setNewTheater(() => [...result])
        }
    }, [sessions, theaters, setNewTheater])

    useEffect(() => {
        if (movies !== null && sessions !== null && newType !== null) {

            const result = [...sessions].filter(() => {
                if (sessions.movieId === movies.id && newType.type === sessions.movieType) {
                    return (
                        sessions.movieId === movies.id && newType.type === sessions.movieType
                    )
                }
            })
            setNewSession(() => [...result])
        }
    }, [sessions, movies, setNewSession])

    const handleModal = () => {
        passIsOpen(0)
    }

    const handleActiveType = (id, value) => {
        setIsActiveType(id)
        setNewType(value)
    }


    const handleActiveBranch = (id,) => {
        setIsActiveBranch(id)
    }

    const handleActiveDate = (id) => {
        setIsActiveDate(id)
    }


    const bookingFormDate = () => {
        let result = []

        for (let i = 0; i < 4; i++) {
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
            let dateToday = (weekday[today.getDay() + i] + " - " + (today.getDate() + i) + '/' + (today.getMonth() + 1))

            result.push(
                <span className={
                    isActiveDate === i ? "booking-form__date__item active" :
                        "booking-form__date__item"
                }
                    onClick={() => handleActiveDate(i)}
                >{dateToday}</span>
            )
        }
        return result
    }


    const showTime = (movieNow, theater) => {
        let result = []
        newSession && newSession.forEach((session) => {
            if (session.movieId === movieNow.id &&
                session.theaterId === theater.id &&
                session.movieType === newType) {
                return result.push(
                    mapSuatChieu(session)
                )
            }
        })
        return result
    }

    const mapSuatChieu = (session) => {
        return session.movieTime.map((time, i) =>
            < span className="booking-form__time__item" key={i}>{time}</span >
        )
    }

    const showTheater = (movieNow, movieTypes) => {
        let result = []

        newTheater && newTheater.forEach((theater, i) => {
            if (theater.branchId === isActiveBranch) {
                return result.push(
                    <div className="booking-form__time" key={i}>
                        <div
                            className="booking-form__time__name"
                            key={theater.id}
                        >
                            {theater.name}

                        </div>
                        <div className="row">
                            {showTime(movieNow, theater, movieTypes)}
                        </div>
                    </div>)
            }
        })

        return result
    }

    const showType = () => {
        return (
            movieTypes && movieTypes.map((type, i) =>

                (<span
                    className={isActiveType === type.id ?
                        "booking-form__type__item active" :
                        "booking-form__type__item"}
                    onClick={() => handleActiveType(type.id, type.type)}
                    key={i}
                >
                    {type.type}
                </span>)
            )
        )
    }


    const showBranch = () => {
        return (
            newForm && newForm.map((branch, i) =>
                <span
                    className={isActiveBranch === branch.id ?
                        "booking-form__city__item active" :
                        "booking-form__city__item"}
                    onClick={() => handleActiveBranch(branch.id)}
                    key={i}

                >{branch.name}</span>
            )
        )
    }

    const showMovieForm = (movieNow, movieTypes) => {

        if (movieNow !== null && theaters !== null && movieTypes !== null) {

            return (
                <div className="booking-form__inner">

                    <div className="booking-form__date row">
                        {bookingFormDate()}
                    </div>

                    <div className="booking-form__city row">
                        {showBranch()}
                    </div>

                    <div className="booking-form__type row">
                        {showType()}
                    </div>

                    {showTheater(movieNow, movieTypes)}

                </div>

            )
        }
    }

    return (
        <div className={!isOpenModal ?
            "booking-form-container none" :
            "booking-form-container"}>
            <div className="background-modal"
                onClick={handleModal}></div>
            <div className="booking-form">
                {showMovieForm(movieNow, movieTypes)}
            </div>
        </div>
    )
}

export default BookingForm
