import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { signup } from '../../../../api/auth'

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = async (dataForm, e) => {
        const data = await signup(dataForm)

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
        <div className="signup">
            {error ? error : message}
            <h2 className="signup__heading">Đăng ký</h2>
            <form action="" className="signup__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__group">
                    <label htmlFor="" className="label__form">Họ tên:</label>
                    <input
                        type="text"
                        placeholder="Họ tên"
                        id="username"
                        className="form__input"
                        {...register('username', {
                            required: true
                        })}
                    />
                    {errors?.username?.type === "required" && <p className="form__error">Username không đc để trống</p>}
                </div>
                <div className="form__group">
                    <label htmlFor="" className="label__form">Điện thoại:</label>
                    <input
                        type="text"
                        placeholder="Điện thoại"
                        id="phone"
                        className="form__input"
                        {...register('phone', {
                            required: true,
                            pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g
                        })}
                    />
                    {errors?.phone?.type === "required" && <p className="form__error">Sđt không đc để trống</p>}
                    {errors?.phone?.type === "pattern" && (<p className="form__error">Sđt chưa đúng định dạng</p>)}
                </div>
                <div className="form__group">
                    <label htmlFor="" className="label__form">Email của bạn:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="form__input"
                        {...register('email', {
                            required: true,
                            pattern: /^([\w]*[\w\.]*(?!\.)@gmail.com)/
                        })}
                    />
                    {errors?.email?.type === "required" && <p className="form__error">Email không đc để trống</p>}
                    {errors?.email?.type === "pattern" && (<p className="form__error">Email chưa đúng định dạng</p>)}
                </div>
                <div className="form__group">
                    <label htmlFor="" className="label__form">Mật khẩu:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        className="form__input"
                        {...register('password', {
                            required: true,
                            minLength: 6
                        })}
                    />
                    {errors?.password?.type === "required" && <p className="form__error">Mật khẩu không đc để trống</p>}
                    {errors?.password?.type === "minLength" && (<p className="form__error">Mật khẩu ít nhất 6 kí tự</p>)}
                </div>
                <Link to="/login"><p className="signin__link">Đã có tài khoản?</p></Link>
                <button type="submit" className="signup__btn">Đăng ký</button>
            </form>
        </div>
    )
}

export default RegisterForm
