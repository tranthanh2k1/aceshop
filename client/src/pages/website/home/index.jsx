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

    const onSubmit = async (dataForm, e) => {
        const dataBooking = {
            ...dataForm,
            user_id: user && user._id
        }

        const { data } = await axios.post(`${API}/booking`, dataBooking)

        if (data.success) {
            alert(data.message)
            e.target.reset()
        }
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
                                    <form action="#" className="appointment" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row ">
                                            <div className="col">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                        {...register('name')}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="Phone number"
                                                        {...register('phone')}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        {...register('email')}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                            <select name="service_id" id="" className="form-control" {...register('service_id')}>
                                                                <option value="">---Chọn dịch vụ---</option>
                                                                {listService.map(item => (
                                                                    <>
                                                                        <option key={item._id} value={item._id}>{item.name}</option>
                                                                    </>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <input
                                                            type="date"
                                                            name="repair_time"
                                                            className="form-control appointment_date"
                                                            placeholder="Date"
                                                            {...register('repair_time')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <input
                                                            type="time"
                                                            name="correction_time"
                                                            className="form-control appointment_time"
                                                            placeholder="Time"
                                                            min="08:00"
                                                            max="18:00"
                                                            {...register('correction_time')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <input
                                                            type="text"
                                                            name="address"
                                                            className="form-control appointment_date"
                                                            placeholder="Địa chỉ"
                                                            {...register('address')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <textarea
                                                        name="description_error"
                                                        cols="30"
                                                        rows="5"
                                                        placeholder='Mô tả lỗi'
                                                        className='form__desc-error'
                                                        {...register('description_error')}
                                                    >

                                                    </textarea>
                                                </div>

                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Send message" className="btn btn-secondary btn-submit-booking" />
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
