import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as bookingTimeAction from "../../../actions/bookingTime";
import * as theaterAction from '../../../actions/theaterAction'
import * as branchAction from '../../../actions/branchs'
function BookingForm() {
    const [isActiveType, setIsActiveType] = useState(0)
    const [isActiveBranch, setIsActiveBranch] = useState(0)
    const [isActiveDate, setIsActiveDate] = useState(0)
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

    const showSession = (session) => {
        return (
            session.suatChieu.map((suat, i) =>
                <span className="booking-form__time__item" key={i}>{suat} PM</span>)
        )
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



    const showTheater = (session) => {
        let result = []

        theaters && theaters.forEach((theater) => {
            if (session.theaterId === theater.id) {
                return result.push(
                    <div className="booking-form__time__name" key={theater.id}>
                        {theater.tenRap}
                    </div>)
            }

        })

        return result
    }

    // let tomorow = today.setDate(today.getDate() + 1)
    // let abc = new Date(tomorow)




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
        console.log("dateToday", result)
        return result

    }


    return (
        <div className="booking-form">
            <div className="booking-form__inner">

                <div className="booking-form__date row">
                    {bookingFormDate()}
                </div>

                <div className="booking-form__city row">
                    {
                        branchs && branchs.map((branch, i) =>
                            <span
                                className={isActiveBranch === branch.id ?
                                    "booking-form__city__item active" :
                                    "booking-form__city__item"}
                                onClick={() => handleActiveBranch(branch.id)}
                                key={i}

                            >{branch.ten}</span>
                        )
                    }
                    {/* <span className="booking-form__city__item active">Ho Chi Minh</span>
                    <span className="booking-form__city__item">Ha noi</span>
                    <span className="booking-form__city__item">Da Nang</span> */}
                </div>

                <div className="booking-form__type row">
                    {
                        sessions && sessions.map((session, i) =>

                            <span
                                className={isActiveType === session.id ?
                                    "booking-form__type__item active" :
                                    "booking-form__type__item"}
                                onClick={() => handleActiveType(session.id)}
                                key={i}
                            >
                                {session.dinhDangChieu}
                            </span>

                        )
                    }
                </div>

                {
                    sessions && sessions.map((session, i) =>
                        <div className="booking-form__time" key={i}>
                            {showTheater(session)}
                            <div className="row">
                                {showSession(session)}

                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default BookingForm
