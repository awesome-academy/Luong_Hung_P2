import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as bookingTimeAction from "../../../actions/bookingTime";
import * as theaterAction from '../../../actions/theaterAction'
import * as branchAction from '../../../actions/branchs'
function BookingForm({ movieNow, passIsOpen, isOpenModal2 }) {
    const [isActiveType, setIsActiveType] = useState(0)
    const [isOpenModal, setIsOpenModal] = useState(isOpenModal2)
    const [isActiveBranch, setIsActiveBranch] = useState(0)
    const [isActiveDate, setIsActiveDate] = useState(0)
    const [newForm, setNewForm] = useState([])
    const sessions = useSelector(state => state.bookingTimeReducer.data)
    const branchs = useSelector(state => state.branchReducer.data)
    const theaters = useSelector(state => state.theaterReducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bookingTimeAction.bookingTimeRequest())
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
        if (theaters !== null && branchs !== null && sessions !== null) {
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


    const handleModal = () => {
        passIsOpen(0)
    }


    const handleActiveType = (id) => {
        setIsActiveType(id)
    }

    const handleActiveBranch = (id) => {
        setIsActiveBranch(id)
    }

    const handleActiveDate = (id) => {
        setIsActiveDate(id)
    }


    const bookingFormDate = () => {
        let result = []

        for (let i = 0; i < 4; i++) {
            let today = new Date()
            let weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
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

        sessions && sessions.forEach((session) => {
            console.log(" session.movieId", session.movieId
                + "  movieNow.id", movieNow.id)
            if (movieNow.id === session.movieId &&
                session.theaterId === theater.id) {
                return result.push(
                    mapSuatChieu(session)
                )
            }
        })
        return result
    }

    const mapSuatChieu = (session) => {
        return session.suatChieu.map((suat, i) =>
            < span className="booking-form__time__item" key={i}>{suat} PM</span >
        )
    }

    const showTheater = (movieNow) => {
        let result = []

        theaters && theaters.forEach((theater) => {
            if (theater.branchId === isActiveBranch) {
                return result.push(
                    <div className="booking-form__time">
                        <div
                            className="booking-form__time__name"
                            key={theater.id}
                        >
                            {theater.tenRap}

                        </div>
                        <div className="row">
                            {showTime(theater, movieNow)}
                        </div>
                    </div>)
            }
        })

        return result
    }

    const showType = (movieNow) => {
        let result = []

        sessions && sessions.forEach((session, i) => {
            if (sessions) {
                return result.push(<span
                    className={isActiveType === session.id ?
                        "booking-form__type__item active" :
                        "booking-form__type__item"}
                    onClick={() => handleActiveType(session.id)}
                    key={i}
                >
                    {movieNow.dinhDang}
                </span>)
            }
        })

        return result
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

                >{branch.ten}</span>
            )
        )
    }

    const showMovieForm = (movieNow) => {

        if (movieNow !== null) {
            return (
                <div className="booking-form__inner">

                    <div className="booking-form__date row">
                        {bookingFormDate(movieNow)}
                    </div>

                    <div className="booking-form__city row">
                        {showBranch(movieNow)}
                    </div>

                    <div className="booking-form__type row">
                        {showType(movieNow)[0]}
                    </div>

                    {showTheater(movieNow)}

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
                {showMovieForm(movieNow)}
            </div>
        </div>
    )
}

export default BookingForm
