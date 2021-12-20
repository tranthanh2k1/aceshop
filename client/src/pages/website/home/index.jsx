import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { listServiceAction } from '../../../redux/actions/services'
import { useForm } from 'react-hook-form'
import { API } from '../../../constants'
import { getUserLocalStorage } from '../../../redux/actions/auth'

const HomePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { listService } = useSelector(state => state.service)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

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
            e.target.reset()
            setError("")
            setMessage(data.message)
            alert(data.message)
        } else {
            setError(data.message)
            alert(data.message)
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

                                    {error ? error : message}
                                    <h2 className="title">Free Consultation</h2>
                                    <form action="" className="appointment" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row ">
                                            <div className="col">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                        {...register('name', {
                                                            required: true,
                                                            isLength: ({ min: 6, max: 30 })
                                                        })}
                                                    />
                                                    {errors?.name?.type === "required" && <p className="form__error">Name không được để trống</p>}
                                                    {errors?.name?.type === "isLength" && <p className="form__error">Tên phải dài từ 3 đến 30 kí tự</p>}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="Phone number"
                                                        {...register('phone', {
                                                            required: true,
                                                            pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g
                                                        })}
                                                    />
                                                    {errors?.phone?.type === "required" && <p className="form__error">Phone không được để trống</p>}
                                                    {errors?.phone?.type === "pattern" && (<p className="form__error">Phone chưa đúng định dạng</p>)}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        {...register('email', {
                                                            required: true,
                                                            pattern: /^([\w]*[\w\.]*(?!\.)@gmail.com)/
                                                        })}
                                                    />
                                                    {errors?.email?.type === "required" && <p className="form__error">Email không được để trống</p>}
                                                    {errors?.email?.type === "pattern" && (<p className="form__error">Email chưa đúng định dạng</p>)}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                            <select name="service_id" id="service_id" className="form-control" {...register('service_id',{
                                                                required: true
                                                            })}>
                                                                <option value="">---Chọn dịch vụ---</option>
                                                                {listService.map(item => (
                                                                    <>
                                                                        <option key={item._id} value={item._id}>{item.name}</option>
                                                                    </>
                                                                ))}
                                                            </select>
                                                            {errors?.service_id?.type === "required" && <p className="form__error">Bạn chưa chọn dịch vụ</p>}
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
                                                            {...register('repair_time', {
                                                                required: true
                                                            })}
                                                        />
                                                        {errors?.repair_time?.type === "required" && <p className="form__error">Ngày không được để trống</p>}
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
                                                            {...register('correction_time', {
                                                                required: true,
                                                                
                                                            })}
                                                        />
                                                        {errors?.correction_time?.type === "required" && <p className="form__error">Giờ không được để trống</p>}
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
                                                            {...register('address', {
                                                                required : "true"
                                                            })}
                                                        />
                                                        {errors?.address?.type === "required" && <p className="form__error">Địa chỉ không được để trống</p>}
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
                                                        {...register('description_error', {
                                                            required: true,
                                                        })}
                                                    >
                                                    </textarea>
                                                    {errors?.description_error?.type === "required" && <p className="form__error" > Mô tả không được để trống</p>}
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
