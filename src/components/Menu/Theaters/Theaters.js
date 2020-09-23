import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../../sass/theater.scss'
import { theaterRequest } from '../../../actions/theaterAction'
import { branchRequest } from '../../../actions/branchs'
function Theaters() {

    const theaters = useSelector(state => state.theaterReducer.data)
    const branchs = useSelector(state => state.branchReducer.data)
    const [filterBranch, setFilterBranch] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(theaterRequest())
    }, [dispatch])


    useEffect(() => {
        dispatch(branchRequest())
    }, [dispatch])

    useEffect(() => {
        if (branchs !== null & theaters !== null) {
            const result = [...branchs].filter(() => {
                if (branchs.id === theaters.branchId) {
                    return branchs.id === theaters.branchId
                }

            })
            setFilterBranch(() => [...result])
        }

    }, [branchs, theaters])

    const showBranch = (theater) => {
        const result = []

        if (filterBranch !== null) {

            filterBranch && filterBranch.forEach((branch) => {
                if (branch.id === theater.branchId) {
                    return result.push(
                        <span className="value">  {branch.name}</span>
                    )
                }
            })
        }
        return result
    }
    return (
        <div className="theater-container">
            <div className="container">
                <div className="wrap-theater__title">
                    <span className="theater__title">All theaters</span>
                </div>


                <div className="theater">
                    <div className="row">
                        {theaters && theaters.map((theater, i) =>

                            <div className="col-12 theater__item" key={i}>
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <img className="theater__image" src={theater.image} alt="theater image" />
                                    </div>
                                    <div className="col-12 col-sm-8">
                                        <div className="theater__name">{theater.name}</div>
                                        <div className="theater__branch">
                                            <span className="key">Branchs: </span>
                                            {showBranch(theater)}
                                        </div>
                                        <div className="theater__address">
                                            <span className="key">Address: </span>
                                            <span className="value">{theater.address}</span>
                                        </div>
                                        <div className="theater__hotline">
                                            <span className="key"> Hotline: </span>
                                            <span className="value">{theater.hotline}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theaters
