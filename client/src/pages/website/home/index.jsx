import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { listServiceAction } from '../../../redux/actions/services'
import { useForm } from 'react-hook-form'
import { API } from '../../../constants'
import { getUserLocalStorage } from '../../../redux/actions/auth'

const HomePage = () => {
    const { register, handleSubmit } = useForm()

    const { listService } = useSelector(state => state.service)
    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listServiceAction())
    }, [])

    useEffect(() => {
        user && dispatch(getUserLocalStorage())
    }, [])

    const onSubmit = async (dataForm) => {
        const dataBooking = {
            ...dataForm,
            user_id: user && user._id
        }

        const data = await axios.post(`${API}/booking`, dataBooking)
    }

    return (
        <div>
            <section className="ftco-appointment">
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <div className="wrap-appointment">
                                <div className=" heading-section">
                                    <span className="subheading">Booking an Appointment</span>
                                    <h2 className="title">Free Consultation</h2>
                                    <form action="#" className="appointment">
                                        <div className="row ">
                                            <div className="col">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Phone number" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                            <select name="" id="" className="form-control">
                                                                <option value="">Select Services</option>
                                                                <option value="">Spinal Manupulation</option>
                                                                <option value="">Electrotherapy</option>
                                                                <option value="">Manual Lymphatic</option>
                                                                <option value="">Medical Acupuncture</option>
                                                                <option value="">Therapeutic Exercise</option>
                                                                <option value="">Joint Mobilization</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                            <select name="" id="" className="form-control">
                                                                <option value="">Select Chiropractor</option>
                                                                <option value="">John Doe</option>
                                                                <option value="">William Smith</option>
                                                                <option value="">Danny Green</option>
                                                                <option value="">Jason Thompson</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <div className="icon"><span className="fa fa-calendar"></span></div>
                                                        <input type="text" className="form-control appointment_date" placeholder="Date" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <div className="icon"><span className="fa fa-clock-o"></span></div>
                                                        <input type="text" className="form-control appointment_time" placeholder="Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <input type="submit" value="Send message" className="btn btn-secondary" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="ftco-desc">
                                    <div className="desc ">
                                        <h2>Business Hours</h2>
                                        <div className="opening-hours">
                                            <h4>Opening Days:</h4>
                                            <p className="desc-item">
                                                <span><strong>Monday – Friday:</strong> 9am to 20 pm</span>
                                                <span><strong>Saturday :</strong> 9am to 17 pm</span>
                                            </p>
                                            <h4>Vacations:</h4>
                                            <p className="desc-item">
                                                <span>All Sunday Days</span>
                                                <span>All Official Holidays</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="desc ">
                                        <h3 className="heading">For Emergency Cases</h3>
                                        <span className="phone">(+01) 123 456 7890</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
