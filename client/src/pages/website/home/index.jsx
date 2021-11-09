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
        dispatch(getUserLocalStorage())
    }, [])

    const onSubmit = async (dataForm) => {
        console.log("data", dataForm)
        const dataBooking = {
            // name: dataForm.name,
            // phone: dataForm.phone,
            // email: dataForm.email,
            // address: dataForm.address,
            // require_time: dataForm.require_time,
            // correction_time: dataForm.correction_time,
            // description_error: dataForm.description_error,
            // service_id: dataForm.service_id
            ...dataForm,
            user_id: user && user._id
        }
        // console.log("data", dataBooking)

        const data = await axios.post(`${API}/booking`, dataBooking)
    }

    return (
        <div>
            <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row d-md-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="d-md-flex">
                                <div className="col-md-8 bg-primary p-5 heading-section heading-section-white">
                                    <span className="subheading">Booking an Appointment</span>
                                    <h2 className="mb-4">Free Consultation</h2>
                                    <form action="#" className="appointment" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row justify-content-center">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                        {...register("name")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="Phone number"
                                                        {...register("phone")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        {...register("email")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        className="form-control"
                                                        placeholder="Address"
                                                        {...register("address")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="fa fa-chevron-down" /></div>
                                                            <select
                                                                name="service_id"
                                                                className="form-control"
                                                                {...register("service_id")}
                                                            >
                                                                <option key="1" value="1">---Chọn dịch vụ---</option>
                                                                {listService.map(service => (
                                                                    <option key={service._id} value={service._id}>{service.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="fa fa-chevron-down" /></div>
                                                            <select name id className="form-control">
                                                                <option value>Select Chiropractor</option>
                                                                <option value>John Doe</option>
                                                                <option value>William Smith</option>
                                                                <option value>Danny Green</option>
                                                                <option value>Jason Thompson</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <div className="icon"><span className="fa fa-calendar" /></div>
                                                        <input
                                                            type="date"
                                                            name="require_time"
                                                            className="form-control appointment_date"
                                                            placeholder="Date"
                                                            {...register("require_time")}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <div className="icon"><span className="fa fa-clock-o" /></div>
                                                        <input
                                                            type="time"
                                                            name="correction_time"
                                                            className="form-control appointment_time"
                                                            min="08:00"
                                                            max="21:00"
                                                            placeholder="Time"
                                                            {...register("correction_time")}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <textarea
                                                    name="description_error" cols="30" rows="10"
                                                    placeholder='Mô tả lỗi'
                                                    {...register("description_error")}
                                                ></textarea>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="submit" defaultValue="Send message" className="btn btn-secondary py-3 px-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4 bg-white text-center p-5">
                                    <div className="desc border-bottom pb-4">
                                        <h2>Business Hours</h2>
                                        <div className="opening-hours">
                                            <h4>Opening Days:</h4>
                                            <p className="pl-3">
                                                <span><strong>Monday – Friday:</strong> 9am to 20 pm</span>
                                                <span><strong>Saturday :</strong> 9am to 17 pm</span>
                                            </p>
                                            <h4>Vacations:</h4>
                                            <p className="pl-3">
                                                <span>All Sunday Days</span>
                                                <span>All Official Holidays</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="desc pt-4 ">
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
